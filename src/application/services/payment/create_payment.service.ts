import { Inject } from '@nestjs/common';
import { FindAllPaymentProviderRepository } from 'src/application/repository/payment/find_all_payment_providers.repository';
import { NotifyPaymentMapper } from 'src/application/shared/mapper/notify_payment.mapper';
import { NotifyProcessPayment } from 'src/domain/notify/use_cases/notify_process_payment';
import { PaymentMethodDTO } from 'src/domain/payment/dto/payment.dto';
import { PaymentResultDTO } from 'src/domain/payment/dto/payment_result.dto';
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

    await this.notifyProcessPayment.onNotify(paymentProvidersToNotify);

    return new PaymentResultDTO({ payment_id: '123' });
  }
}
