/*
  Warnings:

  - You are about to drop the column `comemntId` on the `application` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `application` DROP FOREIGN KEY `application_comemntId_fkey`;

-- AlterTable
ALTER TABLE `application` DROP COLUMN `comemntId`,
    ADD COLUMN `commentId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `application` ADD CONSTRAINT `application_commentId_fkey` FOREIGN KEY (`commentId`) REFERENCES `comment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
