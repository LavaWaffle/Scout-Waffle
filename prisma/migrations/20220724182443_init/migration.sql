/*
  Warnings:

  - You are about to drop the `autolaunch` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `autolaunch` DROP FOREIGN KEY `AutoLaunch_gameId_fkey`;

-- DropTable
DROP TABLE `autolaunch`;

-- CreateTable
CREATE TABLE `auto_launch` (
    `id` VARCHAR(191) NOT NULL,
    `launchOne` ENUM('GotIn', 'BounceOut', 'MissClose', 'MissFar', 'NoLaunch') NOT NULL,
    `launchTwo` ENUM('GotIn', 'BounceOut', 'MissClose', 'MissFar', 'NoLaunch') NOT NULL,
    `gameId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `auto_launch_id_key`(`id`),
    UNIQUE INDEX `auto_launch_gameId_key`(`gameId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `auto_launch` ADD CONSTRAINT `auto_launch_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `game`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
