-- CreateTable
CREATE TABLE "features"."profiles_features" (
    "profiles" UUID REFERENCES "public"."profiles" ON DELETE CASCADE NOT NULL PRIMARY KEY,
    "uniqueName" TEXT NOT NULL,
    "profileEmbedding" vector(384) NULL,
    "preferenceAggregate" vector(384) NULL,
    "metadata" JSONB NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "profiles_features_uniqueName_key" ON "features"."profiles_features"("uniqueName");

create function features.handle_new_profile() returns trigger as $$ begin
insert into features.profiles_features ("profiles","uniqueName", "metadata")
values (
    new.id,
    new.email,
    '{}'
);
return new;
end;
$$ language plpgsql security definer;

create trigger on_profiles_created
after
insert on public.profiles for each row execute procedure features.handle_new_profile();