import { NotifyProcessPaymentService } from 'src/application/services/notify/notify_process_payments.services';
import { tokensQueue } from 'src/domain/shared/tokens/tokens_queue';
import { fakes } from './notify_process_payment.fake';

describe('(NotifyProcessPaymentService)', () => {
  const sut = new NotifyProcessPaymentService(fakes.messageProviderFake);

  it('should be service to defined', () => {
    expect(sut).toBeDefined();
  });

  it('should be service call QueueServiceProvider with correct params', async () => {
    const spy = jest.spyOn(fakes.messageProviderFake, 'onSendMessage');

    await sut.onNotify([]);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(tokensQueue.processPayment, []);
  });
});
