import { Module } from '@nestjs/common';
import { HistoryModule } from '../history/module/module';
import { NotifyModule } from '../notify/module/notify.module';
import { PaymentModule } from '../payment/module/payment.module';

@Module({
  imports: [PaymentModule, NotifyModule, HistoryModule],
})
export class PresentationModule {}
