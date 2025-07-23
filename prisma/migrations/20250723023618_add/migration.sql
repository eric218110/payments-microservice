-- CreateTable
CREATE TABLE "PaymentProviders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "maxRetry" INTEGER NOT NULL,
    "timeout" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "detailid" TEXT NOT NULL,
    CONSTRAINT "PaymentProviders_detailid_fkey" FOREIGN KEY ("detailid") REFERENCES "ProviderDetail" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProviderDetail" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "requireAuthentication" BOOLEAN NOT NULL DEFAULT false,
    "authenticationId" TEXT NOT NULL,
    CONSTRAINT "ProviderDetail_authenticationId_fkey" FOREIGN KEY ("authenticationId") REFERENCES "ProviderAuthentication" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProviderAuthentication" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'NONE',
    "username" TEXT,
    "password" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "PaymentProviders_name_key" ON "PaymentProviders"("name");
