import { NotifyProcessPaymentDTO } from 'src/domain/notify/dto/notify_process_payment.dto';
import { NotifyProcessPayment } from 'src/domain/notify/use_cases/notify_process_payment';

export class NotifyProcessPaymentService implements NotifyProcessPayment {
  onNotify(notifyProcessPayment: NotifyProcessPaymentDTO[]): Promise<boolean> {
    console.log(notifyProcessPayment);

    return Promise.resolve(true);
  }
}
