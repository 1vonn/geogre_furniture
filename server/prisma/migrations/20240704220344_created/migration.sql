-- CreateTable
CREATE TABLE "Client_table" (
    "id" TEXT NOT NULL,
    "full_Name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_table_email_key" ON "Client_table"("email");
