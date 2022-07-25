/*
  Warnings:

  - You are about to drop the column `autoLaunchId` on the `game` table. All the data in the column will be lost.
  - You are about to alter the column `weWin` on the `game` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `Enum("game_weWin")`.

*/
-- AlterTable
ALTER TABLE `game` DROP COLUMN `autoLaunchId`,
    MODIFY `weWin` ENUM('Win', 'Lose', 'Tie') NOT NULL;
