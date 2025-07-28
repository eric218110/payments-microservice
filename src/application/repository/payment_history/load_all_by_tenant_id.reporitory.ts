import { PaymentHistoryModel } from 'src/domain/payment/model/payment_history.model';

export interface LoadAllHistoryByTenantRepository {
  onLoadAllByTenantId(tenantId: string): Promise<PaymentHistoryModel[]>;
}
