import { LoadAllHistoryByTenantRepository } from 'src/application/repository/payment_history/load_all_by_tenant_id.reporitory';
import { ProviderStatusTypeEnum } from 'src/domain/payment/enum/payment_history_type.enum';
import { PaymentHistoryModel } from 'src/domain/payment/model/payment_history.model';

class LoadAllHistoryByTenantRepositoryFake
  implements LoadAllHistoryByTenantRepository
{
  onLoadAllByTenantId(): Promise<PaymentHistoryModel[]> {
    return Promise.resolve([
      new PaymentHistoryModel({
        createAt: '',
        payment_id: '',
        status: ProviderStatusTypeEnum.NONE,
        tenantId: '',
      }),
    ]);
  }
}

export const fakes = {
  loadAllHistoryByTenantRepositoryFake:
    new LoadAllHistoryByTenantRepositoryFake(),
};
