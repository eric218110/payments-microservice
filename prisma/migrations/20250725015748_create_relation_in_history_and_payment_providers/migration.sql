/*
  Warnings:

  - You are about to drop the column `providerDetailsId` on the `payment_history` table. All the data in the column will be lost.
  - You are about to drop the column `detailid` on the `payment_providers` table. All the data in the column will be lost.
  - You are about to drop the column `paymentHistoryId` on the `payment_providers` table. All the data in the column will be lost.
  - Added the required column `detailId` to the `payment_providers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "main"."payment_history" DROP CONSTRAINT "payment_history_providerDetailsId_fkey";

-- DropForeignKey
ALTER TABLE "main"."payment_providers" DROP CONSTRAINT "payment_providers_detailid_fkey";

-- AlterTable
ALTER TABLE "main"."payment_history" DROP COLUMN "providerDetailsId";

-- AlterTable
ALTER TABLE "main"."payment_providers" DROP COLUMN "detailid",
DROP COLUMN "paymentHistoryId",
ADD COLUMN     "detailId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "main"."_historyProviders" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_historyProviders_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_historyProviders_B_index" ON "main"."_historyProviders"("B");

-- AddForeignKey
ALTER TABLE "main"."payment_providers" ADD CONSTRAINT "payment_providers_detailId_fkey" FOREIGN KEY ("detailId") REFERENCES "main"."provider_details"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "main"."_historyProviders" ADD CONSTRAINT "_historyProviders_A_fkey" FOREIGN KEY ("A") REFERENCES "main"."payment_history"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "main"."_historyProviders" ADD CONSTRAINT "_historyProviders_B_fkey" FOREIGN KEY ("B") REFERENCES "main"."payment_providers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
