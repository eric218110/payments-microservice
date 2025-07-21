import { PaymentMethodDTO } from '../dto/payment.dto';
import { PaymentResultDTO } from '../dto/payment_result.dto';

export interface StartPaymentProcess {
  process(data: PaymentMethodDTO): Promise<PaymentResultDTO>;
}
