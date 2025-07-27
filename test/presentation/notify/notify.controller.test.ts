import { NotifyPaymentResultDTO } from 'src/domain/notify/dto/notify_payment_result.dto';
import { NotifyPaymentResultController } from 'src/presentation/notify/controller/notify_payment_result.controller';
import { fakes } from './notify.controller.fake';
import { notifyPaymentResultDTOMock } from './notify.controller.mock';

describe('NotifyPaymentResultController', () => {
  const sut = new NotifyPaymentResultController(fakes.notifyPaymentResultFake);

  it('should be NotifyPaymentResultController is defined', () => {
    expect(sut).toBeDefined();
  });

  it('should be NotifyPaymentResultController call NotifyPaymentResult with correct params', async () => {
    const spy = jest.spyOn(fakes.notifyPaymentResultFake, 'process');

    await sut.handleMessage(notifyPaymentResultDTOMock);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      new NotifyPaymentResultDTO(notifyPaymentResultDTOMock),
    );
  });
});
