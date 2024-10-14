/*
  Warnings:

  - Added the required column `companyName` to the `job` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `job` DROP FOREIGN KEY `job_companyId_fkey`;

-- AlterTable
ALTER TABLE `job` ADD COLUMN `companyName` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `job` ADD CONSTRAINT `job_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
