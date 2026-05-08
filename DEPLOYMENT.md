# Production Deployment Guide

## What is already wired

- Next.js app router project is scaffolded.
- Prisma schema exists in `prisma/schema.prisma`.
- Supabase storage upload helper is in `src/lib/supabase/storage.ts`.
- Git repository is initialized and linked to the provided GitHub remote.

## Important production note

The app still uses mock data in some pages. To make it fully live, replace the mock data sources in `src/data/mock.ts` with Prisma queries and server components/actions backed by the production database before or during rollout.

## Environment variables

Set these in `.env.local` for local development and in Vercel for production:

```bash
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@db.btineratloxjlwfponyt.supabase.co:5432/postgres"
SUPABASE_URL="https://btineratloxjlwfponyt.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="YOUR_SUPABASE_SERVICE_ROLE_KEY"
NEXT_PUBLIC_SUPABASE_URL="https://btineratloxjlwfponyt.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="sb_publishable_eY7M5uPZW7hNlPIcdXbulw_vvEzNIFk"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="YOUR_CLERK_PUBLISHABLE_KEY"
CLERK_SECRET_KEY="YOUR_CLERK_SECRET_KEY"
CLERK_SIGN_IN_URL="/login"
CLERK_SIGN_UP_URL="/register"
CLERK_AFTER_SIGN_IN_URL="/admin"
CLERK_AFTER_SIGN_UP_URL="/player"
```

## Local production rehearsal

1. Install dependencies.
2. Generate Prisma client.
3. Apply migrations to the Supabase database.
4. Replace mock reads with live queries.
5. Run the app against the live services.

```bash
npm install
npx prisma generate
npx prisma migrate deploy
npm run dev
```

## Supabase setup

1. Create the storage buckets `player-images` and `gallery-images`.
2. Decide whether they are public or signed-url only.
3. If using uploads from the server, keep the service role key private and only in server-side env vars.

## Clerk setup

1. Create a production Clerk application.
2. Add your Vercel domain to allowed origins.
3. Set the redirect URLs to `/login`, `/register`, `/admin`, and `/player` as configured in the app.

## Vercel setup

1. Import the GitHub repository.
2. Set the project root to the repo root.
3. Add all environment variables from above.
4. Use the default Next.js build settings.
5. Use `npm run build` as the build command if you override defaults.
6. Run migrations before or during the first deploy:

```bash
npx prisma migrate deploy
npx prisma generate
```

## Git remote commands

If you want to push the current codebase to the provided GitHub repo:

```bash
git add .
git commit -m "Prepare production deployment"
git push -u origin main
```

## Final production checklist

- Replace mock-data pages with live Prisma queries.
- Verify auth flows in Clerk production.
- Verify image uploads write to Supabase storage buckets.
- Confirm Vercel environment variables match `.env.local`.
- Confirm `npx prisma migrate deploy` succeeds in production.
- Add backups and monitoring after the first successful deployment.
