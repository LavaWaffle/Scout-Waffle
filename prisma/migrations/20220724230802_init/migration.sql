/*
  Warnings:

  - You are about to drop the column `climpRP` on the `game` table. All the data in the column will be lost.
  - Added the required column `climbRP` to the `game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `game` DROP COLUMN `climpRP`,
    ADD COLUMN `climbRP` INTEGER NOT NULL;
