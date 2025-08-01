import { Injectable } from '@nestjs/common';
import { NotifyProcessPaymentDTO } from 'src/domain/notify/dto/notify_process_payment.dto';
import { PaymentMethodDTO } from 'src/domain/payment/dto/payment.dto';
import { ProviderTypeEnum } from 'src/domain/payment/enum/provider_type.enum';
import { PaymentModel } from 'src/domain/payment/model';
import { BrainTreeBodyModel } from 'src/domain/payment/model/external/braintree_body.model';
import { StripperBodyModel } from 'src/domain/payment/model/external/striper_body.model';
import { BrainTreeMapper } from './braintree.mapper';
import { StripperMapper } from './stripper.mapper';

@Injectable()
export class NotifyPaymentMapper {
  constructor(
    private readonly stripperMapper: StripperMapper,
    private readonly brainTreeMapper: BrainTreeMapper,
  ) {}

  to(
    paymentModel: PaymentModel[],
    paymentMethodDTO: PaymentMethodDTO,
  ): NotifyProcessPaymentDTO[] {
    return paymentModel.map((dto) => {
      let body: StripperBodyModel | BrainTreeBodyModel =
        this.stripperMapper.to(paymentMethodDTO);

      if (dto.providerType === ProviderTypeEnum.BRAINTREE) {
        body = this.brainTreeMapper.to(paymentMethodDTO);
      }

      const {
        method = '',
        name = '',
        payment_id = '',
        retry = 0,
        timeout = 0,
        url = '',
      } = dto;
      const model: NotifyProcessPaymentDTO = {
        paymentProviders: {
          id: payment_id,
          name,
          retry,
          timeout,
          details: {
            method,
            url,
          },
          body,
        },
      };

      return model;
    });
  }
}
