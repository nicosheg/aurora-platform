import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EXPERIENCE_ID = "tovyah";

function getAccessToken() {
  return process.env.TOVYAH_PUBLIC_TOKEN || "";
}

function getSupabaseConfig() {
  const url = process.env.AURORA_SUPABASE_URL;
  const key = process.env.AURORA_SUPABASE_SECRET_KEY || process.env.AURORA_SUPABASE_SERVICE_ROLE_KEY;
  return url && key ? { url: url.replace(/\/+$/, ""), key } : null;
}

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store, max-age=0" } });
}

function validToken(token: string | null) {
  const expected = getAccessToken();
  return Boolean(expected && token && token === expected);
}

export async function GET(request: NextRequest) {
  const experience = request.nextUrl.searchParams.get("experience");
  const token = request.nextUrl.searchParams.get("token");

  if (experience !== EXPERIENCE_ID || !validToken(token)) return jsonResponse({ error: "not_found" }, 404);

  const supabase = getSupabaseConfig();
  if (!supabase) return jsonResponse({ status: "unavailable" }, 503);

  const response = await fetch(
    supabase.url + "/rest/v1/aurora_time_capsules?experience_slug=eq." + encodeURIComponent(EXPERIENCE_ID) + "&select=message,unlock_at,sealed_at&limit=1",
    {
      headers: { apikey: supabase.key, Authorization: "Bearer " + supabase.key },
      cache: "no-store",
    }
  );

  if (!response.ok) return jsonResponse({ status: "unavailable" }, 503);

  const rows = (await response.json()) as Array<{ message?: string; unlock_at?: string; sealed_at?: string }>;
  const row = rows[0];
  if (!row) return jsonResponse({ status: "empty" });

  const unlocked = row.unlock_at ? new Date(row.unlock_at).getTime() <= Date.now() : false;
  if (!unlocked) return jsonResponse({ status: "sealed", unlockAt: row.unlock_at, sealedAt: row.sealed_at });

  return jsonResponse({ status: "unlocked", message: row.message || "", unlockAt: row.unlock_at, sealedAt: row.sealed_at });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      experience?: string;
      token?: string;
      message?: string;
      answers?: Record<string, string>;
      unlockAt?: string;
    };

    if (body.experience !== EXPERIENCE_ID || !validToken(body.token || null)) return jsonResponse({ error: "not_found" }, 404);
    if (!body.message?.trim()) return jsonResponse({ error: "message_required" }, 400);
    if (!body.unlockAt || Number.isNaN(new Date(body.unlockAt).getTime())) return jsonResponse({ error: "unlock_date_required" }, 400);

    const supabase = getSupabaseConfig();
    if (!supabase) return jsonResponse({ status: "unavailable" }, 503);

    const sanitizedAnswers: Record<string, string> = {};
    Object.entries(body.answers || {}).slice(0, 8).forEach(([key, value]) => {
      if (typeof value === "string") sanitizedAnswers[key.slice(0, 64)] = value.slice(0, 5000);
    });

    const payload = {
      experience_slug: EXPERIENCE_ID,
      recipient_name: "Tovyah",
      message: body.message.trim().slice(0, 12000),
      answers: sanitizedAnswers,
      sealed_at: new Date().toISOString(),
      unlock_at: new Date(body.unlockAt).toISOString(),
      updated_at: new Date().toISOString(),
    };

    const response = await fetch(supabase.url + "/rest/v1/aurora_time_capsules?on_conflict=experience_slug", {
      method: "POST",
      headers: {
        apikey: supabase.key,
        Authorization: "Bearer " + supabase.key,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates,return=minimal",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!response.ok) return jsonResponse({ status: "unavailable" }, 503);
    return jsonResponse({ status: "sealed", unlockAt: payload.unlock_at });
  } catch {
    return jsonResponse({ status: "unavailable" }, 503);
  }
}
