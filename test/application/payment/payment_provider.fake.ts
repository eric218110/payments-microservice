import { AddPaymentHistoryRepository } from 'src/application/repository/payment_history/add_payment_history.repository';
import { FindAllPaymentProviderRepository } from 'src/application/repository/payment_provider/find_all_payment_providers.repository';
import { BrainTreeMapper } from 'src/application/shared/mapper/braintree.mapper';
import { NotifyPaymentMapper } from 'src/application/shared/mapper/notify_payment.mapper';
import { StripperMapper } from 'src/application/shared/mapper/stripper.mapper';
import { NotifyProcessPayment } from 'src/domain/notify/use_cases/notify_process_payment';
import { ProviderStatusTypeEnum } from 'src/domain/payment/enum/payment_history_type.enum';
import { PaymentModel } from 'src/domain/payment/model';
import { PaymentHistoryModel } from 'src/domain/payment/model/payment_history.model';
import { onFindAllByTenantIdMock } from './payment_provider.mock';

class FindAllPaymentProviderRepositoryFake
  implements FindAllPaymentProviderRepository
{
  onFindAllByTenantId(): Promise<PaymentModel[]> {
    return Promise.resolve([onFindAllByTenantIdMock]);
  }
}

class NotifyProcessPaymentFake implements NotifyProcessPayment {
  onNotify(): Promise<boolean> {
    return Promise.resolve(true);
  }
}

class AddPaymentHistoryRepositoryFake implements AddPaymentHistoryRepository {
  onAdd(): Promise<PaymentHistoryModel> {
    return Promise.resolve(
      new PaymentHistoryModel({
        payment_id: '1234',
        status: ProviderStatusTypeEnum.IN_PROGRESS,
        tenantId: '1234',
        createAt: '',
      }),
    );
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
  addPaymentHistoryRepositoryFake: new AddPaymentHistoryRepositoryFake(),
};
