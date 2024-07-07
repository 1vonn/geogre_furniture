/*
  Warnings:

  - A unique constraint covering the columns `[user_Email]` on the table `Users_table` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Users_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users_table" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Users_table_user_Email_key" ON "Users_table"("user_Email");
