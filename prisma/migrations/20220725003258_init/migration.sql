/*
  Warnings:

  - Added the required column `tornament` to the `game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `game` ADD COLUMN `tornament` VARCHAR(191) NOT NULL;
