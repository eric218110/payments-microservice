import { PaymentModel } from 'src/domain/model';

export interface FindAllPaymentProviderRepository {
  onFindAll(): Promise<PaymentModel[]>;
}
