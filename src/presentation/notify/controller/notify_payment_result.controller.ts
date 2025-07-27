import { Controller, Inject } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { NotifyPaymentResultDTO } from 'src/domain/notify/dto/notify_payment_result.dto';
import { NotifyPaymentResult } from 'src/domain/notify/use_cases/notify_payment_result';
import { TokenProvider } from 'src/domain/shared/tokens/tokens_providers';
import { tokensQueue } from 'src/domain/shared/tokens/tokens_queue';

@Controller()
export class NotifyPaymentResultController {
  constructor(
    @Inject(TokenProvider.NotifyPaymentResult)
    private readonly notifyPaymentResult: NotifyPaymentResult,
  ) {}

  @EventPattern(tokensQueue.processPaymentOut)
  handleMessage(@Payload() data: unknown) {
    return this.notifyPaymentResult.process(
      new NotifyPaymentResultDTO(data as NotifyPaymentResultDTO),
    );
  }
}
