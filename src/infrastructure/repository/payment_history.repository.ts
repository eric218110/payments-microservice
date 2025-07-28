/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { PaymentHistoryStatusType } from 'prisma/.generate';
import { AddPaymentHistoryRepository } from 'src/application/repository/payment_history/add_payment_history.repository';
import { LoadAllHistoryByTenantRepository } from 'src/application/repository/payment_history/load_all_by_tenant_id.reporitory';
import { UpdateHistoryStatusByPaymentId } from 'src/application/repository/payment_history/update_status_by_payment_id.repository';
import { ProviderStatusTypeEnum } from 'src/domain/payment/enum/payment_history_type.enum';
import { PaymentHistoryModel } from 'src/domain/payment/model/payment_history.model';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentHistoryRepository
  implements
    AddPaymentHistoryRepository,
    UpdateHistoryStatusByPaymentId,
    LoadAllHistoryByTenantRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async onLoadAllByTenantId(tenantId: string): Promise<PaymentHistoryModel[]> {
    const items = await this.prisma.paymentHistory.findMany({
      where: {
        tenantId,
      },
    });

    return items.map(
      (item) =>
        new PaymentHistoryModel({
          createAt: item.createdAt?.toISOString(),
          payment_id: item.id,
          tenantId: item.tenantId,
          status: this.mapperStatusToResponse(item.status),
        }),
    );
  }

  async onUpdateStatusByPaymentId(
    paymentId: string,
    status: ProviderStatusTypeEnum,
  ): Promise<PaymentHistoryModel> {
    const paymentHistory = await this.prisma.paymentHistory.findFirst({
      where: {
        id: paymentId,
        status: {
          in: ['FAIL', 'IN_PROGRESS'],
        },
      },
    });

    if (!paymentHistory || paymentHistory?.id === '') {
      return new PaymentHistoryModel({
        payment_id: '',
        status: ProviderStatusTypeEnum.NONE,
        tenantId: '',
        createAt: '',
      });
    }

    const statusToUpdate = this.mapperStatusToSave(status);

    const updatePaymentHistory = await this.prisma.paymentHistory.update({
      where: {
        id: paymentId,
      },
      data: {
        ...paymentHistory,
        status: statusToUpdate,
      },
    });

    return new PaymentHistoryModel({
      payment_id: updatePaymentHistory.id,
      status: this.mapperStatusToResponse(updatePaymentHistory.status),
      tenantId: updatePaymentHistory.tenantId,
      createAt: updatePaymentHistory.createdAt?.toISOString(),
    });
  }

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
      tenantId: createdHistory.tenantId,
      createAt: createdHistory.createdAt?.toISOString(),
    });
  }

  private mapperStatusToSave(currentStatus: ProviderStatusTypeEnum) {
    if (currentStatus === ProviderStatusTypeEnum.SUCCESS)
      return PaymentHistoryStatusType.SUCCESS;
    if (currentStatus === ProviderStatusTypeEnum.IN_PROGRESS)
      return PaymentHistoryStatusType.IN_PROGRESS;
    return PaymentHistoryStatusType.FAIL;
  }

  private mapperStatusToResponse(currentStatus: PaymentHistoryStatusType) {
    if (currentStatus === ProviderStatusTypeEnum.SUCCESS)
      return ProviderStatusTypeEnum.SUCCESS;
    if (currentStatus === ProviderStatusTypeEnum.IN_PROGRESS)
      return ProviderStatusTypeEnum.IN_PROGRESS;
    return ProviderStatusTypeEnum.FAIL;
  }
}
