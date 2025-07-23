import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/shared/module/domain.module';
import { PaymentController } from '../controller/payment.controller';

@Module({
  imports: [DomainModule],
  controllers: [PaymentController],
})
export class PaymentModule {}
