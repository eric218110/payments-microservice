import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaymentMethodDTO } from 'src/domain/payment/dto/payment.dto';
import { ProcessPayment } from './payment.decorator';

@Controller('payment')
@ApiTags('payment')
export class PaymentController {
  @ProcessPayment()
  processPaymentMethod(): Promise<PaymentMethodDTO> {
    throw new Error();
  }
}
