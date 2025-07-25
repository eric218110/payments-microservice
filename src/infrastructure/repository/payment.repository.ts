import { Injectable } from '@nestjs/common';
import { AddPaymentHistoryRepository } from 'src/application/repository/payment/add_payment_history.repository';
import { FindAllPaymentProviderRepository } from 'src/application/repository/payment/find_all_payment_providers.repository';
import { ProviderStatusTypeEnum } from 'src/domain/payment/enum/payment_history_type.enum';
import { ProviderTypeEnum } from 'src/domain/payment/enum/provider_type.enum';
import { PaymentModel } from 'src/domain/payment/model';
import { PaymentHistoryModel } from 'src/domain/payment/model/payment_history.model';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentRepository
  implements FindAllPaymentProviderRepository, AddPaymentHistoryRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async onAdd(
    tenantId: string,
    paymentProviderIds: string[],
  ): Promise<PaymentHistoryModel> {
    const createdHistory = await this.prisma.paymentHistory.create({
      data: {
        status: 'IN_PROGRESS',
        tenantId,
        providers: {
          connect: paymentProviderIds.map((id) => ({ id })),
        },
      },
    });

    return new PaymentHistoryModel({
      payment_id: createdHistory.id,
      status: ProviderStatusTypeEnum.IN_PROGRESS,
    });
  }

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
