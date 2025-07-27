import { Injectable } from '@nestjs/common';
import { FindTenantWithCallbackRepository } from 'src/application/repository/tenant/find_tenant_with_callback.repository';
import { TenantModel } from 'src/domain/tenant/model/tenant.model';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TenantRepository implements FindTenantWithCallbackRepository {
  constructor(private readonly prisma: PrismaService) {}

  async onFindByTenantIdAndCallbackIsActiveAndEvent(
    tenantId: string,
    event: string,
  ): Promise<TenantModel> {
    const tenant = await this.prisma.tenant.findUnique({
      where: {
        id: tenantId,
      },
      include: {
        TenantCallbackListeners: {
          where: {
            isActive: true,
            event,
          },
          take: 1,
        },
      },
    });

    if (!tenant) {
      return new TenantModel({
        callback: null,
        name: '',
        tenantId: '',
      });
    }

    const { TenantCallbackListeners: callbacks = [], ...rest } = tenant;
    const [callback = { id: '', isActive: false, url: '', event: '' }] =
      callbacks;

    return new TenantModel({
      tenantId: rest.id,
      name: rest.name,
      callback,
    });
  }
}
