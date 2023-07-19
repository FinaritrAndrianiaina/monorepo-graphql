alter table public.profiles
ADD CONSTRAINT profilesauth_fkey
FOREIGN KEY (id) 
 references auth.users on delete cascade;

-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table public.profiles enable row level security;
create policy "Public profiles are viewable by everyone." on public.profiles for
select using (true);
create policy "Users can insert their own profile." on public.profiles for
insert with check (auth.uid() = id);
create policy "Users can update own profile." on public.profiles for
update using (auth.uid() = id);
-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
create function public.handle_new_user() returns trigger as $$ begin
insert into public.profiles ("id", "fullName", "userName","avatarUrl")
values (
        new.id,
        new.email,
        new.email,
        new.raw_user_meta_data->>'avatar_url'
    );
return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
after
insert on auth.users for each row execute procedure public.handle_new_user();
-- Set up Storage!
insert into storage.buckets (id, name)
values ('avatars', 'avatars');
-- Set up access controls for storage.
-- See https://supabase.com/docs/guides/storage#policy-examples for more details.
create policy "Avatar images are publicly accessible." on storage.objects for
select using (bucket_id = 'avatars');
create policy "Anyone can upload an avatar." on storage.objects for
insert with check (bucket_id = 'avatars');