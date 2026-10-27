# RiboTech – Deploy to Vercel

## 1. Gmail app password (new one!)
1. Revoke the old app password in your Google Account (Security > 2-Step Verification > App passwords).
2. Create a new one and copy the 16 characters.

## 2. Supabase (free database)
1. Create a project at supabase.com.
2. SQL Editor > New query > paste `supabase-setup.sql` > Run.
3. Project Settings > API: copy the **Project URL** and the **service_role** key (keep it secret).

## 3. Test locally (optional)
1. Copy `.env.example` to `.env` and fill in the 4 values.
2. `npm install` then `npm start`, open http://localhost:3000

## 4. Deploy
1. Push this folder to a GitHub repo (`.env` is already ignored).
2. vercel.com > Add New > Project > import the repo > leave the build settings alone.
3. Before deploying, add these Environment Variables:
   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, GMAIL_USER, GMAIL_APP_PASSWORD
4. Deploy. (If you change env vars later, redeploy.)
