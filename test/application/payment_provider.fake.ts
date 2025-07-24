import { FindAllPaymentProviderRepository } from 'src/application/repository/payment/find_all_payment_providers.repository';
import { BrainTreeMapper } from 'src/application/shared/mapper/braintree.mapper';
import { NotifyPaymentMapper } from 'src/application/shared/mapper/notify_payment.mapper';
import { StripperMapper } from 'src/application/shared/mapper/stripper.mapper';
import { NotifyProcessPaymentDTO } from 'src/domain/notify/dto/notify_process_payment.dto';
import { NotifyProcessPayment } from 'src/domain/notify/use_cases/notify_process_payment';
import { PaymentModel } from 'src/domain/payment/model';
import { onFindAllByTenantIdMock } from './payment_provider.mock';

class FindAllPaymentProviderRepositoryFake
  implements FindAllPaymentProviderRepository
{
  onFindAllByTenantId(): Promise<PaymentModel[]> {
    return Promise.resolve([onFindAllByTenantIdMock]);
  }
}

class NotifyProcessPaymentFake implements NotifyProcessPayment {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onNotify(notifyProcessPayment: NotifyProcessPaymentDTO[]): Promise<boolean> {
    return Promise.resolve(true);
  }
}

export const fakes = {
  findAllPaymentProviderRepositoryFake:
    new FindAllPaymentProviderRepositoryFake(),
  notifyProcessPayment: new NotifyProcessPaymentFake(),
  notifyPaymentMapperFake: new NotifyPaymentMapper(
    new StripperMapper(),
    new BrainTreeMapper(),
  ),
};
