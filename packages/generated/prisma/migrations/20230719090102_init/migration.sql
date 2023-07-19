-- CreateTable
CREATE TABLE "recipe" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(250) NOT NULL,
    "description" TEXT,
    "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "recipe_id_key" ON "recipe"("id");
