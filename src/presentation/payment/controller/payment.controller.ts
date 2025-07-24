import { Body, Inject } from '@nestjs/common';
import { PaymentMethodDTO } from 'src/domain/payment/dto/payment.dto';
import { StartPaymentProcess } from 'src/domain/payment/use_cases/payment_provider';
import { TenantHeader } from 'src/domain/shared/decorator/tenant.decorator';
import { TokenProvider } from 'src/domain/shared/tokens/tokens_providers';
import { TenantHeaderDto } from 'src/domain/tenant/dto/tenant_in_header.dto';
import {
  PaymentControllerDecorator,
  ProcessPayment,
} from './payment.decorator';

@PaymentControllerDecorator()
export class PaymentController {
  constructor(
    @Inject(TokenProvider.StartPaymentProcess)
    private readonly startPaymentProcess: StartPaymentProcess,
  ) {}

  @ProcessPayment()
  processPaymentMethod(
    @TenantHeader() headers: TenantHeaderDto,
    @Body() body: PaymentMethodDTO,
  ) {
    return this.startPaymentProcess.process(headers, body);
  }
}
