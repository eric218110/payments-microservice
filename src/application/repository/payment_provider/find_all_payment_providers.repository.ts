import { PaymentModel } from 'src/domain/payment/model';

export interface FindAllPaymentProviderRepository {
  onFindAllByTenantId(tenantId: string): Promise<PaymentModel[]>;
}
