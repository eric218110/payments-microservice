import { Module } from '@nestjs/common';
import { TokenProvider } from 'src/domain/shared/tokens/tokens_providers';
import { PrismaService } from '../prisma/prisma.service';
import { PaymentRepository } from '../repository/payment.repository';

const exportProviders = [
  {
    useClass: PaymentRepository,
    provide: TokenProvider.FindAllPaymentProviderRepository,
  },
];

@Module({
  providers: [PrismaService, ...exportProviders],
  exports: exportProviders,
})
export class InfrastructureModule {}
