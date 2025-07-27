import { ProviderStatusTypeEnum } from 'src/domain/payment/enum/payment_history_type.enum';
import { PaymentHistoryModel } from 'src/domain/payment/model/payment_history.model';

export interface UpdateHistoryStatusByPaymentId {
  onUpdateStatusByPaymentId(
    paymentId: string,
    status: ProviderStatusTypeEnum,
  ): Promise<PaymentHistoryModel>;
}
