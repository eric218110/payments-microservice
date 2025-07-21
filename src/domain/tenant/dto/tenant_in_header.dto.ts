import { IsString } from 'class-validator';

export class TenantHeaderDto {
  @IsString()
  tenantId: string;
}
