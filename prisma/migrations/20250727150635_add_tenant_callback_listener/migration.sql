-- CreateTable
CREATE TABLE "main"."tenant_callback_listeners" (
    "id" TEXT NOT NULL,
    "event" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "secret" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "tenantId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tenant_callback_listeners_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "main"."tenant_callback_listeners" ADD CONSTRAINT "tenant_callback_listeners_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "main"."tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
