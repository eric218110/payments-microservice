import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { ProviderTypeEnum } from '../enum/provider_type.enum';

export class PaymentModel {
  constructor(data: PaymentModel) {
    Object.assign(this, data);
  }

  @IsString()
  payment_id: string;

  @IsNumber()
  @IsPositive()
  retry: number;

  @IsEnum(ProviderTypeEnum)
  providerType: ProviderTypeEnum;

  @IsNumber()
  @IsPositive()
  timeout: number;

  @IsString()
  name: string;

  @IsString()
  url: string;

  @IsString()
  method: string;

  @IsBoolean()
  requireAuthentication: boolean;

  @IsString()
  @IsOptional()
  authenticationUrl?: string;

  @IsString()
  @IsOptional()
  authenticationUsername?: string;

  @IsString()
  @IsOptional()
  authenticationPassword?: string;
}
