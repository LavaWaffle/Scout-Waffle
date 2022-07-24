-- CreateTable
CREATE TABLE `game` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `autoBalls` INTEGER NOT NULL,
    `cargoRP` INTEGER NOT NULL,
    `climpRP` INTEGER NOT NULL,
    `weWin` BOOLEAN NOT NULL,
    `ourTeam` ENUM('Red', 'Blue') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `marker` (
    `id` VARCHAR(191) NOT NULL,
    `left` DOUBLE NOT NULL,
    `top` DOUBLE NOT NULL,
    `launchOne` ENUM('GotIn', 'BounceOut', 'MissClose', 'MissFar', 'NoLaunch') NOT NULL,
    `launchTwo` ENUM('GotIn', 'BounceOut', 'MissClose', 'MissFar', 'NoLaunch') NOT NULL,
    `gameId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `marker` ADD CONSTRAINT `marker_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `game`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
