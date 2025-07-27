import { Injectable } from '@nestjs/common';
import { PaymentHistoryStatusType } from 'prisma/.generate';
import { AddPaymentHistoryRepository } from 'src/application/repository/payment_history/add_payment_history.repository';
import { UpdateHistoryStatusByPaymentId } from 'src/application/repository/payment_history/update_status_by_payment_id.repository';
import { ProviderStatusTypeEnum } from 'src/domain/payment/enum/payment_history_type.enum';
import { PaymentHistoryModel } from 'src/domain/payment/model/payment_history.model';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentHistoryRepository
  implements AddPaymentHistoryRepository, UpdateHistoryStatusByPaymentId
{
  constructor(private readonly prisma: PrismaService) {}

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
