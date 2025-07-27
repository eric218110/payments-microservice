import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/shared/module/domain.module';
import { NotifyPaymentResultController } from '../controller/notify_payment_result.controller';

@Module({
  imports: [DomainModule],
  controllers: [NotifyPaymentResultController],
})
export class NotifyModule {}
