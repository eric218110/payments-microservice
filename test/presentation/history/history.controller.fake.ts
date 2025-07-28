import { HistoryResponseDTO } from 'src/domain/history/dto/history_response.dto';
import { LoadAllHistoryByTenant } from 'src/domain/history/use_cases/load_all_history';
import { ProviderStatusTypeEnum } from 'src/domain/payment/enum/payment_history_type.enum';

class LoadAllHistoryByTenantFake implements LoadAllHistoryByTenant {
  onLoadByTenant(): Promise<HistoryResponseDTO[]> {
    return Promise.resolve([
      new HistoryResponseDTO({
        created_at: '2025-07-28T03:31:34.749Z',
        payment_id: '123',
        status: ProviderStatusTypeEnum.SUCCESS,
      }),
    ]);
  }
}

export const fakes = {
  loadAllHistoryByTenantFake: new LoadAllHistoryByTenantFake(),
};
