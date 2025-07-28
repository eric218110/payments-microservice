import {
  HttpClientProvider,
  HttpClientProviderResponse,
} from 'src/application/provider/http_client/http_client_provider';
import { MessageProvider } from 'src/application/provider/message/message_provider';
import { UpdateHistoryStatusByPaymentId } from 'src/application/repository/payment_history/update_status_by_payment_id.repository';
import { FindTenantWithCallbackRepository } from 'src/application/repository/tenant/find_tenant_with_callback.repository';
import { ProviderStatusTypeEnum } from 'src/domain/payment/enum/payment_history_type.enum';
import { PaymentHistoryModel } from 'src/domain/payment/model/payment_history.model';
import { TenantModel } from 'src/domain/tenant/model/tenant.model';
import { callbackTenantMock } from './notify_process_payment.mock';

class MessageProviderFake implements MessageProvider<object> {
  onSendMessage(): Promise<boolean> {
    return Promise.resolve(true);
  }
}

class UpdateHistoryStatusByPaymentIdFake
  implements UpdateHistoryStatusByPaymentId
{
  onUpdateStatusByPaymentId(
    paymentId: string,
    status: ProviderStatusTypeEnum,
  ): Promise<PaymentHistoryModel> {
    return Promise.resolve({
      tenantId: 'any_tenant_id',
      payment_id: paymentId,
      status: status,
      createAt: '',
    });
  }
}

class FindTenantWithCallbackRepositoryFake
  implements FindTenantWithCallbackRepository
{
  onFindByTenantIdAndCallbackIsActiveAndEvent(): Promise<TenantModel> {
    return Promise.resolve(callbackTenantMock);
  }
}

class HttpClientProviderFake implements HttpClientProvider {
  async onPost<B = object, R = object>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    body: B,
  ): Promise<HttpClientProviderResponse<R>> {
    return Promise.resolve({
      status: 200,
      data: {} as R,
    });
  }
}

export const fakes = {
  messageProviderFake: new MessageProviderFake(),
  updateHistoryStatusByPaymentId: new UpdateHistoryStatusByPaymentIdFake(),
  findTenantWithCallbackRepositoryFake:
    new FindTenantWithCallbackRepositoryFake(),
  httpClientProviderFake: new HttpClientProviderFake(),
};
