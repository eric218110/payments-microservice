import { Module } from '@nestjs/common';
import { TokenProvider } from 'src/domain/shared/tokens/tokens_providers';
import { PaymentService } from '../services/create_payment.service';
import { BrainTreeMapper } from '../shared/mapper/braintree.mapper';
import { NotifyPaymentMapper } from '../shared/mapper/notify_payment.mapper';
import { StripperMapper } from '../shared/mapper/stripper.mapper';

const providers = [
  {
    useClass: PaymentService,
    provide: TokenProvider.StartPaymentProcess,
  },
  NotifyPaymentMapper,
  StripperMapper,
  BrainTreeMapper,
];

@Module({
  imports: [],
  providers: providers,
  exports: providers,
})
export class ApplicationModule {}
