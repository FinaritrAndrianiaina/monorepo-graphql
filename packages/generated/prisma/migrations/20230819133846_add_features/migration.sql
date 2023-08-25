-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "extensions";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "features";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "graphql";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pgsodium";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "supabase_vault";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "vector";

-- CreateTable
CREATE TABLE "features"."product_features" (
    "productId" UUID NOT NULL,
    "uniqueName" TEXT NOT NULL,
    "vector" vector(384),
    "metadata" JSONB NOT NULL,

    CONSTRAINT "product_features_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "features"."profiles_features" (
    "profiles" UUID NOT NULL,
    "uniqueName" TEXT NOT NULL,
    "profileEmbedding" vector(384),
    "preferenceAggregate" vector(384),
    "metadata" JSONB NOT NULL,

    CONSTRAINT "profiles_features_pkey" PRIMARY KEY ("profiles")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_features_uniqueName_key" ON "features"."product_features"("uniqueName");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_features_uniqueName_key" ON "features"."profiles_features"("uniqueName");

-- AddForeignKey
ALTER TABLE "features"."product_features" ADD CONSTRAINT "product_features_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."products"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "features"."profiles_features" ADD CONSTRAINT "profiles_features_profiles_fkey" FOREIGN KEY ("profiles") REFERENCES "public"."profiles"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
