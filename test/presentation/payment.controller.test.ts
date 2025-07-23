import { PaymentController } from 'src/presentation/payment/controller/payment.controller';
import { paymentMock } from '../shared/mock';
import { fakes } from './payment.controller.fake';

describe('(PaymentController)', () => {
  const sut = new PaymentController(fakes.startPaymentProcess);

  it('should be PaymentController to be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should be PaymentController call service with correct params', async () => {
    const spy = jest.spyOn(fakes.startPaymentProcess, 'process');

    await sut.processPaymentMethod(
      paymentMock.tenant,
      paymentMock.paymentMethodDTO,
    );

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      paymentMock.tenant,
      paymentMock.paymentMethodDTO,
    );
  });
});
