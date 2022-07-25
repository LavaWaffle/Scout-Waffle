/*
  Warnings:

  - Added the required column `climbBar` to the `game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `game` ADD COLUMN `climbBar` ENUM('Low', 'Middle', 'High', 'Traversal') NOT NULL;
