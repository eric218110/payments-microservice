import { NotifyPaymentResultDTO } from 'src/domain/notify/dto/notify_payment_result.dto';
import { ProviderStatusTypeEnum } from 'src/domain/payment/enum/payment_history_type.enum';

export const notifyPaymentResultDTOMock = new NotifyPaymentResultDTO({
  paymentId: '1234',
  status: ProviderStatusTypeEnum.SUCCESS,
  event: 'any event',
});
