import { NotifyPaymentResultDTO } from '../dto/notify_payment_result.dto';

export interface NotifyPaymentResult {
  onNotifyResult(message: NotifyPaymentResultDTO): Promise<void>;
}
