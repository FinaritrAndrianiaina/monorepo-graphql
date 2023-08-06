-- CreateTable
CREATE TABLE "public"."_ProfilesProductLiked" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProfilesProductLiked_AB_unique" ON "public"."_ProfilesProductLiked"("A", "B");

-- CreateIndex
CREATE INDEX "_ProfilesProductLiked_B_index" ON "public"."_ProfilesProductLiked"("B");

-- AddForeignKey
ALTER TABLE "public"."_ProfilesProductLiked" ADD CONSTRAINT "_ProfilesProductLiked_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProfilesProductLiked" ADD CONSTRAINT "_ProfilesProductLiked_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
