-- Run this once in Supabase: SQL Editor > New query > paste > Run
create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  password text not null,
  created_at timestamptz not null default now()
);

-- Lock the table so only the server (service role key) can touch it
alter table public.users enable row level security;
