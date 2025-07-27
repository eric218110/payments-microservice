import { NotifyPaymentResultDTO } from 'src/domain/notify/dto/notify_payment_result.dto';
import { ProviderStatusTypeEnum } from 'src/domain/payment/enum/payment_history_type.enum';

export const notifyPaymentResultDTOMock = new NotifyPaymentResultDTO({
  paymentId: '1234',
  status: ProviderStatusTypeEnum.SUCCESS,
  event: 'any_event',
});

export const callbackTenantMock = {
  name: 'malga.io',
  tenantId: '1234',
  callback: {
    event: 'any_event',
    id: '1234',
    isActive: true,
    url: 'http://callback.com/malga.io/listener/any_event/',
  },
};
