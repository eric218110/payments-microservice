import { Module } from '@nestjs/common';
import { TokenProvider } from 'src/domain/shared/tokens/tokens_providers';
import { HttpClientModule } from '../http_client/module';
import { PrismaService } from '../prisma/prisma.service';
import { RabbitProducer } from '../rabbit/rabbit.producer';
import { PaymentHistoryRepository } from '../repository/payment_history.repository';
import { PaymentProvidersRepository } from '../repository/payment_providers.repository';
import { TenantRepository } from '../repository/tenant.repository';

const exportProviders = [
  {
    useClass: PaymentProvidersRepository,
    provide: TokenProvider.FindAllPaymentProviderRepository,
  },
  {
    useClass: PaymentHistoryRepository,
    provide: TokenProvider.AddPaymentHistoryRepository,
  },
  {
    useClass: PaymentHistoryRepository,
    provide: TokenProvider.UpdateHistoryStatusByPaymentId,
  },
  {
    useClass: RabbitProducer,
    provide: TokenProvider.MessageProvider,
  },
  {
    useClass: TenantRepository,
    provide: TokenProvider.FindTenantWithCallbackRepository,
  },
];

@Module({
  imports: [HttpClientModule],
  providers: [PrismaService, ...exportProviders],
  exports: [...exportProviders, HttpClientModule],
})
export class InfrastructureModule {}
