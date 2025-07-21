import { FindAllPaymentProviderRepository } from 'src/application/repository/payment/find_all_payment_providers.repository';
import { PaymentModel } from 'src/domain/model';

class FindAllPaymentProviderRepositoryFake
  implements FindAllPaymentProviderRepository
{
  onFindAll(): Promise<PaymentModel[]> {
    return Promise.resolve([{} as PaymentModel]);
  }
}

export const fakes = {
  findAllPaymentProviderRepositoryFake:
    new FindAllPaymentProviderRepositoryFake(),
};
