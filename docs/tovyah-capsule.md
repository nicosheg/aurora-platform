# Tovyah future capsule setup

Tovyah is intentionally public without a login, but the future letter is not exposed through the page before its unlock date.

Production path:

1. Run \`supabase/setup/tovyah-time-capsule.sql\` once in the Supabase SQL editor.
2. Add these server-only Vercel environment variables to the Aurora deployment:
   - \`AURORA_SUPABASE_URL\`
   - \`AURORA_SUPABASE_SECRET_KEY\`
3. The legacy \`AURORA_SUPABASE_SERVICE_ROLE_KEY\` name is accepted as a fallback for projects that have not moved to the newer secret-key naming.
4. Never prefix the secret key with \`NEXT_PUBLIC_\`.
5. The route only accepts Tovyah's opaque public slug and never returns the stored message until \`unlock_at\` has passed.

Until the server vault is connected, the Tovyah UI falls back to local device storage and clearly labels that state. The experience still works, but the 2027 cross-device promise becomes durable only after the server store is configured.
