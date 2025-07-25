import { Module } from '@nestjs/common';
import { TokenProvider } from 'src/domain/shared/tokens/tokens_providers';
import { PrismaService } from '../prisma/prisma.service';
import { RabbitProducer } from '../rabbit/rabbit.producer';
import { PaymentRepository } from '../repository/payment.repository';

const exportProviders = [
  {
    useClass: PaymentRepository,
    provide: TokenProvider.FindAllPaymentProviderRepository,
  },
  {
    useClass: PaymentRepository,
    provide: TokenProvider.AddPaymentHistoryRepository,
  },
  {
    useClass: RabbitProducer,
    provide: TokenProvider.MessageProvider,
  },
];

@Module({
  providers: [PrismaService, ...exportProviders],
  exports: exportProviders,
})
export class InfrastructureModule {}
