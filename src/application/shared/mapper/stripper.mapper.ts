import { Injectable } from '@nestjs/common';
import { PaymentMethodDTO } from 'src/domain/payment/dto/payment.dto';
import { StripperBodyModel } from 'src/domain/payment/model/external/striper_body.model';

@Injectable()
export class StripperMapper {
  to(dto: PaymentMethodDTO): StripperBodyModel {
    const {
      installments,
      cardHolder,
      cardNumber,
      cvv,
      expirationMonth,
      expirationYear,
      amount,
      currency,
    } = dto;

    return {
      amount,
      currency,
      description: cardHolder,
      paymentMethod: {
        type: 'card',
        card: {
          cvv,
          installments,
          holderName: cardHolder,
          number: cardNumber,
          expirationDate: `${expirationMonth}/${expirationYear}`,
        },
      },
    };
  }
}
