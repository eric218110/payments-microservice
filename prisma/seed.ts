/* eslint-disable @typescript-eslint/no-misused-promises */

import 'dotenv/config';
import { ProviderTypeEnum } from '../src/domain/payment/enum/provider_type.enum';
import { PrismaClient } from './.generate';

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(
    async (tx) => {
      let authBearer = await tx.providerAuthentication.findFirst({
        where: {
          type: 'BEARER',
          url: 'https://api.example.com/token',
        },
      });

      if (!authBearer) {
        authBearer = await tx.providerAuthentication.create({
          data: {
            url: 'https://api.example.com/token',
            type: 'BEARER',
          },
        });
      }

      let detail1 = await tx.providerDetail.findFirst({
        where: {
          url: 'https://payment-simulator.onrender.com/braintree/transactions',
        },
      });

      if (!detail1) {
        detail1 = await tx.providerDetail.create({
          data: {
            url: 'https://payment-simulator.onrender.com/braintree/transactions',
            method: 'POST',
            requireAuthentication: false,
            authenticationId: authBearer.id,
          },
        });
      }

      let detail2 = await tx.providerDetail.findFirst({
        where: {
          url: 'https://payment-simulator.onrender.com/stripe/charges',
        },
      });

      if (!detail2) {
        detail2 = await tx.providerDetail.create({
          data: {
            url: 'https://payment-simulator.onrender.com/stripe/charges',
            method: 'POST',
            requireAuthentication: false,
            authenticationId: authBearer.id,
          },
        });
      }

      const tenantId = 'bbb2adfb-d684-413f-96c4-0d0d247d7eb0';

      let tenant = await tx.tenant.findUnique({
        where: { id: tenantId },
      });

      if (!tenant) {
        tenant = await tx.tenant.create({
          data: {
            id: tenantId,
            name: 'malga.io',
          },
        });
      }

      const callback = await tx.tenantCallbackListener.findFirst({
        where: {
          tenantId,
        },
      });

      if (!callback) {
        await tx.tenantCallbackListener.create({
          data: {
            event: 'process_payment_out',
            url: 'http://localhost:8080/malga.io/process_payment_out/listener',
            tenantId,
          },
        });
      }

      const existingProviders = await tx.paymentProviders.findMany({
        where: {
          name: { in: ['StripeProvider', 'BraintreeProvider'] },
        },
      });

      const existingNames = new Set(existingProviders.map((p) => p.name));

      const providersToCreate = [];

      if (!existingNames.has('StripeProvider')) {
        providersToCreate.push({
          name: 'StripeProvider',
          provider: ProviderTypeEnum.STRIPPER,
          maxRetry: 0,
          timeout: 15000,
          detailId: detail2.id,
          tenantId: tenant.id,
        });
      }

      if (!existingNames.has('BraintreeProvider')) {
        providersToCreate.push({
          name: 'BraintreeProvider',
          provider: ProviderTypeEnum.BRAINTREE,
          maxRetry: 0,
          timeout: 15000,
          detailId: detail1.id,
          tenantId: tenant.id,
        });
      }

      if (providersToCreate.length > 0) {
        await tx.paymentProviders.createMany({
          data: providersToCreate,
        });
      }

      console.log('Seed end success!');
    },
    { timeout: 15000 },
  );
}

main()
  .catch((e) => {
    console.error('error in seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
