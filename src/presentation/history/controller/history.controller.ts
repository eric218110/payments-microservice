import { Inject } from '@nestjs/common';
import { LoadAllHistoryByTenant } from 'src/domain/history/use_cases/load_all_history';
import { TenantHeader } from 'src/domain/shared/decorator/tenant.decorator';
import { TokenProvider } from 'src/domain/shared/tokens/tokens_providers';
import { TenantHeaderDto } from 'src/domain/tenant/dto/tenant_in_header.dto';
import {
  HistoryControllerDecorator,
  HistoryPayment,
} from './history.decorator';

@HistoryControllerDecorator()
export class HistoryController {
  constructor(
    @Inject(TokenProvider.LoadAllHistoryService)
    private readonly loadAllHistoryService: LoadAllHistoryByTenant,
  ) {}

  @HistoryPayment()
  handleHistoryPayment(@TenantHeader() headers: TenantHeaderDto) {
    return this.loadAllHistoryService.onLoadByTenant(headers.tenantId);
  }
}
