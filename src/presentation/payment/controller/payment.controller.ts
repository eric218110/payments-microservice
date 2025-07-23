import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaymentMethodDTO } from 'src/domain/payment/dto/payment.dto';
import { TenantHeader } from 'src/domain/shared/decorator/tenant.decorator';
import { TenantHeaderDto } from 'src/domain/tenant/dto/tenant_in_header.dto';
import { ProcessPayment } from './payment.decorator';

@Controller('payment')
@ApiTags('payment')
export class PaymentController {
  @ProcessPayment()
  processPaymentMethod(
    @TenantHeader() headers: TenantHeaderDto,
  ): Promise<PaymentMethodDTO> {
    throw new Error();
  }
}
