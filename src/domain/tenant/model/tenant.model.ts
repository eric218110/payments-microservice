import { CallbackTenantModel } from './callback_tenant.model';

export class TenantModel {
  constructor(data: TenantModel) {
    Object.assign(this, data);
  }

  tenantId: string;
  name: string;
  callback: CallbackTenantModel;
}
