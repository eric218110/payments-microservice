import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class NotifyPaymentResultController {
  @EventPattern('process_payment_out')
  handleMessage(@Payload() data: any) {
    console.log(data);
  }
}
