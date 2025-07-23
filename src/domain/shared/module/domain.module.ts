import { Module } from '@nestjs/common';
import { BrainTreeMapper } from '../mapper/braintree.mapper';
import { NotifyPaymentMapper } from '../mapper/notify_payment.mapper';
import { StripperMapper } from '../mapper/stripper.mapper';

const providers = [StripperMapper, BrainTreeMapper, NotifyPaymentMapper];

@Module({
  providers,
  exports: providers,
})
export class DomainModule {}
