import { Injectable } from '@nestjs/common';
import { FindAllPaymentProviderRepository } from 'src/application/repository/payment_provider/find_all_payment_providers.repository';
import { ProviderTypeEnum } from 'src/domain/payment/enum/provider_type.enum';
import { PaymentModel } from 'src/domain/payment/model';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentProvidersRepository
  implements FindAllPaymentProviderRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async onFindAllByTenantId(tenantId: string): Promise<PaymentModel[]> {
    const list = await this.prisma.paymentProviders.findMany({
      where: {
        tenantId,
      },
      include: {
        detail: {
          select: {
            authentication: true,
            method: true,
            requireAuthentication: true,
            url: true,
          },
        },
      },
    });

    return list.map((item) => {
      return new PaymentModel({
        payment_id: item?.id,
        retry: item?.maxRetry,
        timeout: item?.timeout,
        url: item?.detail?.url,
        method: item?.detail?.method,
        requireAuthentication: item?.detail?.requireAuthentication,
        authenticationPassword: item?.detail?.authentication?.password,
        authenticationUsername: item?.detail?.authentication?.username,
        authenticationUrl: item?.detail?.authentication?.url,
        providerType:
          item?.provider === 'STRIPPER'
            ? ProviderTypeEnum.STRIPPER
            : ProviderTypeEnum.BRAINTREE,
        name: item?.name,
      });
    });
  }
}
