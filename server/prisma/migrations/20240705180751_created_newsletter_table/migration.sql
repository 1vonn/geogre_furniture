-- CreateTable
CREATE TABLE "Newsletter_table" (
    "id" TEXT NOT NULL,
    "user_Email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Newsletter_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Newsletter_table_user_Email_key" ON "Newsletter_table"("user_Email");
