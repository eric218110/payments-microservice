import { PaymentService } from 'src/application/services/create_payment.service';
import { ConfigurationProvidersNotFoundException } from 'src/domain/exception';
import { PaymentResultDTO } from 'src/domain/payment/dto/payment_result.dto';
import type { StartPaymentProcess } from 'src/domain/payment/use_cases/payment_provider';
import { fakes } from './payment_provider.fake';
import { paymentMock } from './payment_provider.mock';

describe('(PaymentService)', () => {
  const sut: StartPaymentProcess = new PaymentService(
    fakes.findAllPaymentProviderRepositoryFake,
  );

  it('shold be PaymentService not be empty', () => {
    expect(sut).toBeDefined();
  });

  it('should be service return valid response on start payment process', async () => {
    const response = await sut.process(paymentMock.paymentMethodDTO);

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(PaymentResultDTO);
    expect(response.payment_id).toBeDefined();
  });

  it('should be service call repository with correct params', async () => {
    const spy = jest.spyOn(
      fakes.findAllPaymentProviderRepositoryFake,
      'onFindAll',
    );

    const response = await sut.process(paymentMock.paymentMethodDTO);

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(PaymentResultDTO);
    expect(response.payment_id).toBeDefined();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should be service throws error not configuration found, when repository return empty list', async () => {
    try {
      jest
        .spyOn(fakes.findAllPaymentProviderRepositoryFake, 'onFindAll')
        .mockResolvedValue([]);

      const response = await sut.process(paymentMock.paymentMethodDTO);
      expect(response).toBeUndefined();
    } catch (error) {
      expect(error).toBeInstanceOf(ConfigurationProvidersNotFoundException);
    }
  });
});
