import { IsString } from 'class-validator';

export class TenantHeaderDto {
  constructor(data: TenantHeaderDto) {
    Object.assign(this, data);
  }

  @IsString()
  tenantId: string;
}
