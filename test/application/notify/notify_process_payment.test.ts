import { NotifyProcessPaymentService } from 'src/application/services/notify/notify_process_payments.services';

describe('(NotifyProcessPaymentService)', () => {
  const sut = new NotifyProcessPaymentService();

  it('should be service to defined', () => {
    expect(sut).toBeDefined();
  });
});
