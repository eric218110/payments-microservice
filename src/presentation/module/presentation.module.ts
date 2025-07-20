import { Module } from '@nestjs/common';
import { PaymentModule } from '../payment/module/payment.module';

@Module({
    imports: [PaymentModule]
})
export class PresentationModule {}
