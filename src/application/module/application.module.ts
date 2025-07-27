import { Module } from '@nestjs/common';
import { TokenProvider } from 'src/domain/shared/tokens/tokens_providers';
import { InfrastructureModule } from 'src/infrastructure/module/module';
import { NotifyProcessPaymentService } from '../services/notify/notify_process_payments.services';
import { PaymentService } from '../services/payment/create_payment.service';
import { BrainTreeMapper } from '../shared/mapper/braintree.mapper';
import { NotifyPaymentMapper } from '../shared/mapper/notify_payment.mapper';
import { StripperMapper } from '../shared/mapper/stripper.mapper';

const providers = [
  {
    useClass: PaymentService,
    provide: TokenProvider.StartPaymentProcess,
  },
  {
    useClass: NotifyProcessPaymentService,
    provide: TokenProvider.NotifyProcessPayment,
  },
  {
    useClass: NotifyProcessPaymentService,
    provide: TokenProvider.NotifyPaymentResult,
  },
  NotifyPaymentMapper,
  StripperMapper,
  BrainTreeMapper,
];

@Module({
  imports: [InfrastructureModule],
  providers: providers,
  exports: providers,
})
export class ApplicationModule {}
