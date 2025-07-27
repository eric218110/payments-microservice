import { NotifyProcessPaymentService } from 'src/application/services/notify/notify_process_payments.services';
import { fakes } from './notify_process_payment.fake';
import {
  callbackTenantMock,
  notifyPaymentResultDTOMock,
} from './notify_process_payment.mock';

describe('(NotifyProcessPaymentService)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const sut = new NotifyProcessPaymentService(
    fakes.messageProviderFake,
    fakes.updateHistoryStatusByPaymentId,
    fakes.findTenantWithCallbackRepositoryFake,
    fakes.httpClientProviderFake,
  );

  it('should be service to defined', () => {
    expect(sut).toBeDefined();
  });

  it('should be service call QueueServiceProvider with correct params', async () => {
    const spy = jest.spyOn(fakes.messageProviderFake, 'onSendMessage');

    await sut.onNotify('', []);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('process_payment_in', {
      paymentId: '',
      paymentsProviders: [],
    });
  });

  it('should be function onNotifyResult call repository for change status', async () => {
    const spy = jest.spyOn(
      fakes.updateHistoryStatusByPaymentId,
      'onUpdateStatusByPaymentId',
    );

    await sut.onNotifyResult(notifyPaymentResultDTOMock);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('1234', 'SUCCESS');
  });

  it('should not be repository when status is not valid', async () => {
    const spy = jest.spyOn(
      fakes.updateHistoryStatusByPaymentId,
      'onUpdateStatusByPaymentId',
    );

    await sut.onNotifyResult({
      ...notifyPaymentResultDTOMock,
      status: null,
    });

    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should be function onNotifyResult call FindTenantWithCallbackRepository with correct params', async () => {
    const spy = jest.spyOn(
      fakes.findTenantWithCallbackRepositoryFake,
      'onFindByTenantIdAndCallbackIsActiveAndEvent',
    );

    await sut.onNotifyResult(notifyPaymentResultDTOMock);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('any_tenant_id', 'any_event');
  });

  it('should be function onNotifyResult call HttpClientProvider with correct params', async () => {
    const spy = jest.spyOn(fakes.httpClientProviderFake, 'onPost');

    await sut.onNotifyResult(notifyPaymentResultDTOMock);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(callbackTenantMock.callback.url, {});
  });
});
