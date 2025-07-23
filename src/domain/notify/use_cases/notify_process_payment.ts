import { NotifyProcessPaymentDTO } from '../dto/notify_process_payment.dto';

export interface NotifyProcessPayment {
  onNotify(notifyProcessPayment: NotifyProcessPaymentDTO[]): Promise<boolean>;
}
