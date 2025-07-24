/*
  Warnings:

  - Added the required column `tenantId` to the `PaymentProviders` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Tenant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PaymentProviders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "maxRetry" INTEGER NOT NULL,
    "timeout" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "detailid" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    CONSTRAINT "PaymentProviders_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PaymentProviders_detailid_fkey" FOREIGN KEY ("detailid") REFERENCES "ProviderDetail" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PaymentProviders" ("detailid", "id", "maxRetry", "name", "provider", "timeout") SELECT "detailid", "id", "maxRetry", "name", "provider", "timeout" FROM "PaymentProviders";
DROP TABLE "PaymentProviders";
ALTER TABLE "new_PaymentProviders" RENAME TO "PaymentProviders";
CREATE UNIQUE INDEX "PaymentProviders_name_key" ON "PaymentProviders"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_name_key" ON "Tenant"("name");
