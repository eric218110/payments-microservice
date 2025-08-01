import { Inject } from '@nestjs/common';
import { AddPaymentHistoryRepository } from 'src/application/repository/payment_history/add_payment_history.repository';
import { FindAllPaymentProviderRepository } from 'src/application/repository/payment_provider/find_all_payment_providers.repository';
import { NotifyPaymentMapper } from 'src/application/shared/mapper/notify_payment.mapper';
import { NotifyProcessPayment } from 'src/domain/notify/use_cases/notify_process_payment';
import { PaymentMethodDTO } from 'src/domain/payment/dto/payment.dto';
import { PaymentResultDTO } from 'src/domain/payment/dto/payment_result.dto';
import { ProviderStatusTypeEnum } from 'src/domain/payment/enum/payment_history_type.enum';
import { StartPaymentProcess } from 'src/domain/payment/use_cases/payment_provider';
import { ConfigurationProvidersNotFoundException } from 'src/domain/shared/exception';
import { TokenProvider } from 'src/domain/shared/tokens/tokens_providers';
import { TenantHeaderDto } from 'src/domain/tenant/dto/tenant_in_header.dto';

export class PaymentService implements StartPaymentProcess {
  constructor(
    @Inject(TokenProvider.FindAllPaymentProviderRepository)
    private readonly findAllPaymentProviderRepository: FindAllPaymentProviderRepository,
    @Inject(TokenProvider.NotifyProcessPayment)
    private readonly notifyProcessPayment: NotifyProcessPayment,
    @Inject(TokenProvider.AddPaymentHistoryRepository)
    private readonly addPaymentHistoryRepository: AddPaymentHistoryRepository,
    private readonly notifyPaymentMapper: NotifyPaymentMapper,
  ) {}

  async process(
    tenantHeader: TenantHeaderDto,
    paymentMethodDTO: PaymentMethodDTO,
  ): Promise<PaymentResultDTO> {
    const paymentProviders =
      await this.findAllPaymentProviderRepository.onFindAllByTenantId(
        tenantHeader.tenantId,
      );

    if (!paymentProviders || paymentProviders.length === 0) {
      throw new ConfigurationProvidersNotFoundException();
    }

    const paymentProvidersToNotify = this.notifyPaymentMapper.to(
      paymentProviders,
      paymentMethodDTO,
    );

    const paymentProvidersIds = paymentProviders.map(
      ({ payment_id }) => payment_id,
    );

    const paymentHistory = await this.addPaymentHistoryRepository.onAdd(
      tenantHeader.tenantId,
      paymentProvidersIds,
    );

    const notifyPaymentProcess = await this.notifyProcessPayment.onNotify(
      paymentHistory.payment_id,
      paymentProvidersToNotify,
    );

    if (notifyPaymentProcess) {
      return new PaymentResultDTO({ ...paymentHistory });
    }

    return new PaymentResultDTO({
      payment_id: '',
      status: ProviderStatusTypeEnum.FAIL,
    });
  }
}
