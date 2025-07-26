import { NotifyProcessPaymentDTO } from '../dto/notify_process_payment.dto';

export interface NotifyProcessPayment {
  onNotify(
    paymentId: string,
    notifyProcessPayment: NotifyProcessPaymentDTO[],
  ): Promise<boolean>;
}
