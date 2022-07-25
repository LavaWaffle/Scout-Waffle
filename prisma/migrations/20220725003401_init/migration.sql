/*
  Warnings:

  - You are about to drop the column `tornament` on the `game` table. All the data in the column will be lost.
  - Added the required column `tournament` to the `game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `game` DROP COLUMN `tornament`,
    ADD COLUMN `tournament` VARCHAR(191) NOT NULL;
