/*
  Warnings:

  - Added the required column `cvUrl` to the `application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referralId` to the `application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `application` ADD COLUMN `cvUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `referralId` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `application` ADD CONSTRAINT `application_comemntId_fkey` FOREIGN KEY (`comemntId`) REFERENCES `company`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
