import { NotifyProcessPaymentDTO } from 'src/domain/notify/dto/notify_process_payment.dto';
import { ProviderTypeEnum } from 'src/domain/payment/enum/provider_type.enum';
import { PaymentModel } from 'src/domain/payment/model';

export const notifyProcessPaymentMock: NotifyProcessPaymentDTO[] = [
  {
    paymentProviders: {
      id: 'id-123',
      name: 'payment service',
      retry: 2,
      timeout: 6000,
      details: {
        method: 'POST',
        url: 'http://domain.com/payment',
      },
      body: {
        amount: 100,
        currency: '$', // ISO 4217
        description: 'joe doe',
        paymentMethod: {
          type: 'card',
          card: {
            number: '123',
            holderName: 'joe doe',
            cvv: '123',
            expirationDate: '01/1234', // DD/YYYY
            installments: 1,
          },
        },
      },
    },
  },
];

export const onFindAllByTenantIdMock: PaymentModel = {
  payment_id: 'id-123',
  method: 'POST',
  name: 'payment service',
  requireAuthentication: false,
  retry: 2,
  timeout: 6000,
  url: 'http://domain.com/payment',
  authenticationPassword: '',
  authenticationUrl: '',
  authenticationUsername: '',
  providerType: ProviderTypeEnum.STRIPPER,
};
