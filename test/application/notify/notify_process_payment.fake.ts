import { MessageProvider } from 'src/application/provider/message/message_provider';
import { UpdateHistoryStatusByPaymentId } from 'src/application/repository/payment_history/update_status_by_payment_id.repository';
import { FindTenantWithCallbackRepository } from 'src/application/repository/tenant/find_tenant_with_callback.repository';
import { ProviderStatusTypeEnum } from 'src/domain/payment/enum/payment_history_type.enum';
import { PaymentHistoryModel } from 'src/domain/payment/model/payment_history.model';
import { TenantModel } from 'src/domain/tenant/model/tenant.model';

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
    });
  }
}

class FindTenantWithCallbackRepositoryFake
  implements FindTenantWithCallbackRepository
{
  onFindByTenantIdAndCallbackIsActiveAndEvent(
    tenantId: string,
    event: string,
  ): Promise<TenantModel> {
    return Promise.resolve({
      name: 'malga.io',
      tenantId,
      callback: {
        event,
        id: '1234',
        isActive: true,
        url: 'http://callback.com/malga.io/listener/${event}/',
      },
    });
  }
}

export const fakes = {
  messageProviderFake: new MessageProviderFake(),
  updateHistoryStatusByPaymentId: new UpdateHistoryStatusByPaymentIdFake(),
  findTenantWithCallbackRepositoryFake:
    new FindTenantWithCallbackRepositoryFake(),
};
