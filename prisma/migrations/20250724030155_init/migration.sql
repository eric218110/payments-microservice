-- CreateEnum
CREATE TYPE "PaymentProvidersType" AS ENUM ('STRIPPER', 'BRAINTREE');

-- CreateEnum
CREATE TYPE "AuthenticationType" AS ENUM ('BASIC', 'BEARER', 'API_KEY', 'NONE');

-- CreateTable
CREATE TABLE "tenants" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tenants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_providers" (
    "id" TEXT NOT NULL,
    "maxRetry" INTEGER NOT NULL,
    "timeout" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "provider" "PaymentProvidersType" NOT NULL,
    "detailid" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,

    CONSTRAINT "payment_providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provider_details" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "requireAuthentication" BOOLEAN NOT NULL DEFAULT false,
    "authenticationId" TEXT NOT NULL,

    CONSTRAINT "provider_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provider_authentication" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" "AuthenticationType" NOT NULL DEFAULT 'NONE',
    "username" TEXT,
    "password" TEXT,

    CONSTRAINT "provider_authentication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tenants_name_key" ON "tenants"("name");

-- CreateIndex
CREATE UNIQUE INDEX "payment_providers_name_key" ON "payment_providers"("name");

-- AddForeignKey
ALTER TABLE "payment_providers" ADD CONSTRAINT "payment_providers_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_providers" ADD CONSTRAINT "payment_providers_detailid_fkey" FOREIGN KEY ("detailid") REFERENCES "provider_details"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provider_details" ADD CONSTRAINT "provider_details_authenticationId_fkey" FOREIGN KEY ("authenticationId") REFERENCES "provider_authentication"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
