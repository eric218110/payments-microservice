import { PaymentMethodDTO } from 'src/domain/payment/dto/payment.dto';
import { PaymentMethodEnum } from 'src/domain/payment/enum/payment_methods.enum';

export const paymentMock = {
  paymentMethodDTO: new PaymentMethodDTO({
    type: PaymentMethodEnum.CREDIT_CARD,
  }),
};
