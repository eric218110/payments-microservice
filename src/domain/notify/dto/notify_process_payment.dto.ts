import { BrainTreeBodyModel } from 'src/domain/payment/model/external/braintree_body.model';
import { StripperBodyModel } from 'src/domain/payment/model/external/striper_body.model';

class PaymentProviders {
  id: string;
  retry: number;
  timeout: number;
  name: string;
  details: {
    url: string;
    method: string;
    auth?: {
      url: string;
      type: string;
      username: string;
      password: string;
    };
  };
  body: StripperBodyModel | BrainTreeBodyModel;
}

export class NotifyProcessPaymentDTO {
  paymentProviders: PaymentProviders;
}
