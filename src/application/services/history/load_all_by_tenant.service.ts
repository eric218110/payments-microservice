import { Inject, Injectable } from '@nestjs/common';
import { LoadAllHistoryByTenantRepository } from 'src/application/repository/payment_history/load_all_by_tenant_id.reporitory';
import { HistoryResponseDTO } from 'src/domain/history/dto/history_response.dto';
import { LoadAllHistoryByTenant } from 'src/domain/history/use_cases/load_all_history';
import { TokenProvider } from 'src/domain/shared/tokens/tokens_providers';

@Injectable()
export class LoadAllHistoryByTenantService implements LoadAllHistoryByTenant {
  constructor(
    @Inject(TokenProvider.LoadAllHistoryByTenantRepository)
    private readonly loadAllHistoryByTenantRepository: LoadAllHistoryByTenantRepository,
  ) {}

  async onLoadByTenant(tenantId: string): Promise<HistoryResponseDTO[]> {
    const historyList =
      await this.loadAllHistoryByTenantRepository.onLoadAllByTenantId(tenantId);

    return historyList.map(
      ({ createAt, ...rest }) =>
        new HistoryResponseDTO({
          created_at: createAt,
          ...rest,
        }),
    );
  }
}
