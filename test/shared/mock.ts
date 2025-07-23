import { PaymentMethodDTO } from 'src/domain/payment/dto/payment.dto';
import { PaymentMethodEnum } from 'src/domain/payment/enum/payment_methods.enum';
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
