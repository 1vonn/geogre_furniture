/*
  Warnings:

  - You are about to drop the `User_table` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User_table";

-- CreateTable
CREATE TABLE "Users_table" (
    "id" TEXT NOT NULL,
    "user_Email" TEXT NOT NULL,

    CONSTRAINT "Users_table_pkey" PRIMARY KEY ("id")
);
