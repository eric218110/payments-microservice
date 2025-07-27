import { NotifyPaymentResultController } from 'src/presentation/notify/controller/notify_payment_result.controller';

describe('NotifyPaymentResultController', () => {
  const sut = new NotifyPaymentResultController();
  it('should be NotifyPaymentResultController is defined', () => {
    expect(sut).toBeDefined();
  });
});
