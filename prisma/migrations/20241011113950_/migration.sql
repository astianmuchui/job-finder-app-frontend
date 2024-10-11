/*
  Warnings:

  - You are about to drop the column `emailVerified` on the `session` table. All the data in the column will be lost.
  - Added the required column `emailVerified` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Users` ADD COLUMN `emailVerified` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `session` DROP COLUMN `emailVerified`;
