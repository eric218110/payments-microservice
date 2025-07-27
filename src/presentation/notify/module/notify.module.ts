import { Module } from '@nestjs/common';
import { NotifyPaymentResultController } from '../controller/notify_payment_result.controller';

@Module({
  controllers: [NotifyPaymentResultController],
})
export class NotifyModule {}
