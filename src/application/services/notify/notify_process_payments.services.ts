import { Inject, Injectable, Logger } from '@nestjs/common';
import { HttpClientProvider } from 'src/application/provider/http_client/http_client_provider';
import { MessageProvider } from 'src/application/provider/message/message_provider';
import { UpdateHistoryStatusByPaymentId } from 'src/application/repository/payment_history/update_status_by_payment_id.repository';
import { FindTenantWithCallbackRepository } from 'src/application/repository/tenant/find_tenant_with_callback.repository';
import { NotifyPaymentResultDTO } from 'src/domain/notify/dto/notify_payment_result.dto';
import { NotifyProcessPaymentDTO } from 'src/domain/notify/dto/notify_process_payment.dto';
import { NotifyPaymentResult } from 'src/domain/notify/use_cases/notify_payment_result';
import { NotifyProcessPayment } from 'src/domain/notify/use_cases/notify_process_payment';
import { ProviderStatusTypeEnum } from 'src/domain/payment/enum/payment_history_type.enum';
import { TokenProvider } from 'src/domain/shared/tokens/tokens_providers';
import { tokensQueue } from 'src/domain/shared/tokens/tokens_queue';

@Injectable()
export class NotifyProcessPaymentService
  implements NotifyProcessPayment, NotifyPaymentResult
{
  private readonly logger = new Logger(NotifyProcessPaymentService.name);

  constructor(
    @Inject(TokenProvider.MessageProvider)
    private readonly messageProvider: MessageProvider<object>,
    @Inject(TokenProvider.UpdateHistoryStatusByPaymentId)
    private readonly historyRepository: UpdateHistoryStatusByPaymentId,
    @Inject(TokenProvider.FindTenantWithCallbackRepository)
    private readonly findTenantWithCallbackRepository: FindTenantWithCallbackRepository,
    @Inject(TokenProvider.HttpClientProvider)
    private readonly httpClientProvider: HttpClientProvider,
  ) {}

  async onNotifyResult(message: NotifyPaymentResultDTO): Promise<void> {
    const {
      paymentId = '',
      status = ProviderStatusTypeEnum.NONE,
      event = '',
    } = message;

    if (paymentId && status) {
      const { tenantId } =
        await this.historyRepository.onUpdateStatusByPaymentId(
          paymentId,
          status,
        );

      const bodyToNotify = {
        status,
        paymentId,
        tenantId,
        event,
      };

      await this.sendNotificationToTenant(tenantId, event, bodyToNotify);
      return;
    }

    this.logger.error(`Not possible update status: ${status} | ${paymentId}`);
  }

  async onNotify(
    paymentId: string,
    notifyProcessPayment: NotifyProcessPaymentDTO[],
  ): Promise<boolean> {
    const message = {
      paymentId,
      paymentsProviders: notifyProcessPayment,
    };

    const notifySend = await this.messageProvider.onSendMessage(
      tokensQueue.processPaymentIn,
      message,
    );

    return Promise.resolve(notifySend);
  }

  private async sendNotificationToTenant(
    tenantId: string,
    event: string,
    body: object,
  ) {
    const tenantWithCallback =
      await this.findTenantWithCallbackRepository.onFindByTenantIdAndCallbackIsActiveAndEvent(
        tenantId,
        event,
      );

    if (!tenantWithCallback && !tenantWithCallback.callback.isActive) {
      this.logger.error(
        `Not possible notify tenant, contact administrator and try again`,
      );
      return;
    }

    const { status = 0 } = await this.httpClientProvider.onPost(
      tenantWithCallback.callback.url,
      body,
    );

    this.logger.log(
      `Notify tenant ${tenantWithCallback.name} | Status: ${status}`,
    );
  }
}
