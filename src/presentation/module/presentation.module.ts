import { Module } from '@nestjs/common';
import { NotifyModule } from '../notify/module/notify.module';
import { PaymentModule } from '../payment/module/payment.module';

@Module({
  imports: [PaymentModule, NotifyModule],
})
export class PresentationModule {}
