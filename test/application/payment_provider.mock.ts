import { NotifyProcessPaymentDTO } from 'src/domain/notify/dto/notify_process_payment.dto';
import { PaymentMethodDTO } from 'src/domain/payment/dto/payment.dto';
import { PaymentMethodEnum } from 'src/domain/payment/enum/payment_methods.enum';
import { ProviderTypeEnum } from 'src/domain/payment/enum/provider_type.enum';
import { PaymentModel } from 'src/domain/payment/model';
import { TenantHeaderDto } from 'src/domain/tenant/dto/tenant_in_header.dto';

export const paymentMock = {
  paymentMethodDTO: new PaymentMethodDTO({
    amount: 100,
    currency: '$',
    type: PaymentMethodEnum.CREDIT_CARD,
    cvv: '123',
    cardNumber: '123',
    cardHolder: 'joe doe',
    installments: 1,
    expirationMonth: '01',
    expirationYear: '1234',
  }),
  tenant: new TenantHeaderDto({ tenantId: 'any_client' }),
};

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
