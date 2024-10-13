/*
  Warnings:

  - You are about to drop the column `userId` on the `job` table. All the data in the column will be lost.
  - Added the required column `type` to the `job` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `job` DROP FOREIGN KEY `job_userId_fkey`;

-- AlterTable
ALTER TABLE `job` DROP COLUMN `userId`,
    ADD COLUMN `type` VARCHAR(191) NOT NULL;
