/*
  Warnings:

  - Added the required column `updatedAt` to the `Orders_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders_table" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
