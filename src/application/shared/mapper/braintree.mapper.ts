import { Injectable } from '@nestjs/common';
import { PaymentMethodDTO } from 'src/domain/payment/dto/payment.dto';
import { BrainTreeBodyModel } from 'src/domain/payment/model/external/braintree_body.model';

@Injectable()
export class BrainTreeMapper {
  to(dto: PaymentMethodDTO): BrainTreeBodyModel {
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
      statementDescriptor: cardHolder,
      paymentType: 'card',
      card: {
        cvv,
        installmentNumber: installments,
        expiration: `${expirationMonth}/${expirationYear}`,
        holderstring: cardHolder,
        number: cardNumber,
      },
    };
  }
}
