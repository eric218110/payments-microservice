import { Inject } from '@nestjs/common';
import { MessageProvider } from 'src/application/provider/message/message_provider';
import { NotifyProcessPaymentDTO } from 'src/domain/notify/dto/notify_process_payment.dto';
import { NotifyProcessPayment } from 'src/domain/notify/use_cases/notify_process_payment';
import { TokenProvider } from 'src/domain/shared/tokens/tokens_providers';
import { tokensQueue } from 'src/domain/shared/tokens/tokens_queue';

export class NotifyProcessPaymentService implements NotifyProcessPayment {
  constructor(
    @Inject(TokenProvider.MessageProvider)
    private readonly messageProvider: MessageProvider<object>,
  ) {}

  async onNotify(
    paymentId: string,
    notifyProcessPayment: NotifyProcessPaymentDTO[],
  ): Promise<boolean> {
    const message = {
      paymentId,
      paymentsProviders: notifyProcessPayment,
    };

    const notifySend = await this.messageProvider.onSendMessage(
      tokensQueue.processPaymentIn,
      message,
    );

    return Promise.resolve(notifySend);
  }
}
