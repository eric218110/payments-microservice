import { IsString } from 'class-validator';

export class TenantHeaderDto {
  constructor(data: TenantHeaderDto){
    Object.assign(data, this)
  }

  @IsString()
  tenantId: string;
}
