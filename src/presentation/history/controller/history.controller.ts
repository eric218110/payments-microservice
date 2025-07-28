import { TenantHeader } from 'src/domain/shared/decorator/tenant.decorator';
import { TenantHeaderDto } from 'src/domain/tenant/dto/tenant_in_header.dto';
import {
  HistoryControllerDecorator,
  HistoryPayment,
} from './history.decorator';

@HistoryControllerDecorator()
export class HistoryController {
  @HistoryPayment()
  handleHistoryPayment(@TenantHeader() headers: TenantHeaderDto) {}
}
