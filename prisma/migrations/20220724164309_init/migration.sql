/*
  Warnings:

  - You are about to drop the column `autoBalls` on the `game` table. All the data in the column will be lost.
  - Added the required column `autoLaunchId` to the `game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `game` DROP COLUMN `autoBalls`,
    ADD COLUMN `autoLaunchId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `AutoLaunch` (
    `id` VARCHAR(191) NOT NULL,
    `launchOne` ENUM('GotIn', 'BounceOut', 'MissClose', 'MissFar', 'NoLaunch') NOT NULL,
    `launchTwo` ENUM('GotIn', 'BounceOut', 'MissClose', 'MissFar', 'NoLaunch') NOT NULL,
    `gameId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `AutoLaunch_id_key`(`id`),
    UNIQUE INDEX `AutoLaunch_gameId_key`(`gameId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AutoLaunch` ADD CONSTRAINT `AutoLaunch_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `game`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
