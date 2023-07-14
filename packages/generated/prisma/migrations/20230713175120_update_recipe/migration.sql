/*
  Warnings:

  - You are about to drop the column `text` on the `recipe` table. All the data in the column will be lost.
  - Added the required column `title` to the `recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `recipe` DROP COLUMN `text`,
    ADD COLUMN `creationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `decription` TEXT NULL,
    ADD COLUMN `title` VARCHAR(250) NOT NULL;
