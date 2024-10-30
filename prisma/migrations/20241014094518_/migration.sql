/*
  Warnings:

  - You are about to drop the column `applicationId` on the `comment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `application` DROP FOREIGN KEY `application_comemntId_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `comment_applicationId_fkey`;

-- AlterTable
ALTER TABLE `comment` DROP COLUMN `applicationId`;

-- AddForeignKey
ALTER TABLE `application` ADD CONSTRAINT `application_comemntId_fkey` FOREIGN KEY (`comemntId`) REFERENCES `comment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
