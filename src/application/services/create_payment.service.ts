import { ConfigurationProvidersNotFoundException } from 'src/domain/exception';
import { PaymentMethodDTO } from 'src/domain/payment/dto/payment.dto';
import { PaymentResultDTO } from 'src/domain/payment/dto/payment_result.dto';
import { StartPaymentProcess } from 'src/domain/payment/use_cases/payment_provider';
import { FindAllPaymentProviderRepository } from '../repository/payment/find_all_payment_providers.repository';

export class PaymentService implements StartPaymentProcess {
  constructor(
    private readonly findAllPaymentProviderRepository: FindAllPaymentProviderRepository,
  ) {}

  async process(data: PaymentMethodDTO): Promise<PaymentResultDTO> {
    const paymentProviders =
      await this.findAllPaymentProviderRepository.onFindAll();

    if (!paymentProviders || paymentProviders.length === 0) {
      throw new ConfigurationProvidersNotFoundException();
    }

    return new PaymentResultDTO({ payment_id: '123' });
  }
}
