import { NotifyPaymentResultDTO } from '../dto/notify_payment_result.dto';

export interface NotifyPaymentResult {
  process(message: NotifyPaymentResultDTO): Promise<void>;
}
