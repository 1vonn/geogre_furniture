-- CreateTable
CREATE TABLE "Orders_table" (
    "id" TEXT NOT NULL,
    "full_Name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_Number" INTEGER NOT NULL,
    "delivery_Location" TEXT NOT NULL,
    "category_Type" TEXT NOT NULL,

    CONSTRAINT "Orders_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Orders_table_email_key" ON "Orders_table"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_table_phone_Number_key" ON "Orders_table"("phone_Number");
