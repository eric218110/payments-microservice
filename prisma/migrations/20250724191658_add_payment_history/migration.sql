/*
  Warnings:

  - Added the required column `paymentHistoryId` to the `payment_providers` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "main"."PaymentHistoryStatusType" AS ENUM ('SUCCESS', 'IN_PROGRESS', 'FAIL');

-- AlterTable
ALTER TABLE "main"."payment_providers" ADD COLUMN     "paymentHistoryId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "main"."payment_history" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "providerDetailsId" TEXT NOT NULL,
    "status" "main"."PaymentHistoryStatusType" NOT NULL,

    CONSTRAINT "payment_history_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "main"."payment_history" ADD CONSTRAINT "payment_history_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "main"."tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "main"."payment_history" ADD CONSTRAINT "payment_history_providerDetailsId_fkey" FOREIGN KEY ("providerDetailsId") REFERENCES "main"."payment_providers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
