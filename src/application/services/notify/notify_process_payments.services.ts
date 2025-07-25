import { MessageProvider } from 'src/application/provider/message/message_provider';
import { NotifyProcessPaymentDTO } from 'src/domain/notify/dto/notify_process_payment.dto';
import { NotifyProcessPayment } from 'src/domain/notify/use_cases/notify_process_payment';
import { tokensQueue } from 'src/domain/shared/tokens/tokens_queue';

export class NotifyProcessPaymentService implements NotifyProcessPayment {
  constructor(
    private readonly messageProvider: MessageProvider<
      NotifyProcessPaymentDTO[]
    >,
  ) {}

  async onNotify(
    notifyProcessPayment: NotifyProcessPaymentDTO[],
  ): Promise<boolean> {
    const notifySend = await this.messageProvider.onSendMessage(
      tokensQueue.processPayment,
      notifyProcessPayment,
    );

    return Promise.resolve(notifySend);
  }
}
