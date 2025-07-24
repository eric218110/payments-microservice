import { FindAllPaymentProviderRepository } from 'src/application/repository/payment/find_all_payment_providers.repository';
import { PaymentModel } from 'src/domain/payment/model';
import { PrismaService } from '../prisma/prisma.service';

export class PaymentRepository implements FindAllPaymentProviderRepository {
  constructor(private readonly prisma: PrismaService) {}

  async onFindAllByTenantId(tenantId: string): Promise<PaymentModel[]> {
    console.log(tenantId);

    return Promise.resolve([]);
  }
}
