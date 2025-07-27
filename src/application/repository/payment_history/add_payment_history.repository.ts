import { PaymentHistoryModel } from 'src/domain/payment/model/payment_history.model';

export interface AddPaymentHistoryRepository {
  onAdd(
    tenantId: string,
    paymentProviderIds: string[],
  ): Promise<PaymentHistoryModel>;
}
