import { PaymentResultDTO } from 'src/domain/payment/dto/payment_result.dto';
import { StartPaymentProcess } from 'src/domain/payment/use_cases/payment_provider';

class StartPaymentProcessFake implements StartPaymentProcess {
  process(): Promise<PaymentResultDTO> {
    return Promise.resolve(new PaymentResultDTO({ payment_id: '123' }));
  }
}

export const fakes = {
  startPaymentProcess: new StartPaymentProcessFake(),
};
