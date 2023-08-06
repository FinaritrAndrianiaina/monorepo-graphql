-- CreateTable
CREATE TABLE "features"."product_features" (
    "productId" UUID REFERENCES "public"."products" ON DELETE CASCADE NOT NULL PRIMARY KEY,
    "uniqueName" TEXT NOT NULL,
    "vector" vector(384) NULL,
    "metadata" JSONB NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "product_features_uniqueName_key" ON "features"."product_features"("uniqueName");