import { NotifyPaymentResult } from 'src/domain/notify/use_cases/notify_payment_result';

class NotifyPaymentResultFake implements NotifyPaymentResult {
  process(): Promise<void> {
    return Promise.resolve();
  }
}

export const fakes = {
  notifyPaymentResultFake: new NotifyPaymentResultFake(),
};
