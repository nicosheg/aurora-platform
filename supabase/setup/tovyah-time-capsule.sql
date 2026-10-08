-- Aurora / Tovyah private future-letter storage.
-- Run this once in the Supabase SQL editor for the project used by Aurora.
-- The Next.js route uses the server-only AURORA_SUPABASE_SECRET_KEY variable.

create extension if not exists pgcrypto;

create table if not exists public.aurora_time_capsules (
  id uuid primary key default gen_random_uuid(),
  experience_slug text not null unique,
  recipient_name text not null,
  message text not null,
  answers jsonb not null default '{}'::jsonb,
  sealed_at timestamptz not null default now(),
  unlock_at timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.aurora_time_capsules enable row level security;

revoke all on table public.aurora_time_capsules from anon, authenticated;
grant select, insert, update, delete on table public.aurora_time_capsules to service_role;

create index if not exists aurora_time_capsules_unlock_idx on public.aurora_time_capsules (unlock_at);
