import { Module } from '@nestjs/common';
import { NotifyPaymentResultController } from '../notify/notify_payment_result.controller';
import { PaymentModule } from '../payment/module/payment.module';

@Module({
  imports: [PaymentModule],
  controllers: [NotifyPaymentResultController],
})
export class PresentationModule {}
