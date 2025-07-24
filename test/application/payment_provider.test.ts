import { PaymentService } from 'src/application/services/payment/create_payment.service';
import { PaymentResultDTO } from 'src/domain/payment/dto/payment_result.dto';
import type { StartPaymentProcess } from 'src/domain/payment/use_cases/payment_provider';
import { ConfigurationProvidersNotFoundException } from 'src/domain/shared/exception';
import { paymentMock } from '../shared/mock';
import { fakes } from './payment_provider.fake';
import { notifyProcessPaymentMock } from './payment_provider.mock';

describe('(PaymentService)', () => {
  const sut: StartPaymentProcess = new PaymentService(
    fakes.findAllPaymentProviderRepositoryFake,
    fakes.notifyProcessPayment,
    fakes.notifyPaymentMapperFake,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should be PaymentService not be empty', () => {
    expect(sut).toBeDefined();
  });

  it('should be service return valid response on start payment process', async () => {
    const response = await sut.process(
      paymentMock.tenant,
      paymentMock.paymentMethodDTO,
    );

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(PaymentResultDTO);
    expect(response.payment_id).toBeDefined();
  });

  it('should be service call repository with correct params', async () => {
    const spy = jest.spyOn(
      fakes.findAllPaymentProviderRepositoryFake,
      'onFindAllByTenantId',
    );

    const response = await sut.process(
      paymentMock.tenant,
      paymentMock.paymentMethodDTO,
    );

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(PaymentResultDTO);
    expect(response.payment_id).toBeDefined();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(paymentMock.tenant.tenantId);
  });

  it('should be service throws error not configuration found, when repository return empty list', async () => {
    try {
      jest
        .spyOn(
          fakes.findAllPaymentProviderRepositoryFake,
          'onFindAllByTenantId',
        )
        .mockResolvedValueOnce([]);

      const response = await sut.process(
        paymentMock.tenant,
        paymentMock.paymentMethodDTO,
      );
      expect(response).toBeUndefined();
    } catch (error) {
      expect(error).toBeInstanceOf(ConfigurationProvidersNotFoundException);
    }
  });

  it('should be service call queue NotifyProcessPayment with correct params', async () => {
    const spy = jest.spyOn(fakes.notifyProcessPayment, 'onNotify');

    await sut.process(paymentMock.tenant, paymentMock.paymentMethodDTO);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(notifyProcessPaymentMock);
  });
});
