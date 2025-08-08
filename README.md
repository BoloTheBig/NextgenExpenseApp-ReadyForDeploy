# Nextgen Expense App - Ready to deploy

This repository is a deployable skeleton of Nextgen Expense App built with Next.js 14 (App Router), Tailwind CSS, Supabase and jsPDF. It's preconfigured for Vercel.

## Quick start

1. Install dependencies:
```bash
npm install
```

2. Run locally:
```bash
npm run dev
```

3. Create a `.env.local` file from `.env.local.example` and set your Supabase keys.

4. Push the project to GitHub and import it into Vercel. Add environment variables in the Vercel project settings.

## Notes
- Replace public Supabase keys with your production keys when ready.
- PWA is enabled via `next-pwa`. Customize caching and SW as needed.
