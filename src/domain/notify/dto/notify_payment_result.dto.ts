import { ProviderStatusTypeEnum } from 'src/domain/payment/enum/payment_history_type.enum';

export class NotifyPaymentResultDTO {
  constructor(data: NotifyPaymentResultDTO) {
    Object.assign(this, data);
  }

  paymentId: string;
  status: ProviderStatusTypeEnum;
  response?: object;
}
