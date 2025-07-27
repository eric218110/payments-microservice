import { TenantModel } from 'src/domain/tenant/model/tenant.model';

export interface FindTenantWithCallbackRepository {
  onFindByTenantIdAndCallbackIsActiveAndEvent(
    tenantId: string,
    event: string,
  ): Promise<TenantModel>;
}
