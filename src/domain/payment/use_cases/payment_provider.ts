import { TenantHeaderDto } from 'src/domain/tenant/dto/tenant_in_header.dto';
import { PaymentMethodDTO } from '../dto/payment.dto';
import { PaymentResultDTO } from '../dto/payment_result.dto';

export interface StartPaymentProcess {
  process(
    tenantHeader: TenantHeaderDto,
    paymentMethodDTO: PaymentMethodDTO,
  ): Promise<PaymentResultDTO>;
}
