import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PaymentMethodEnum } from '../enum/payment_methods.enum';

export class PaymentMethodDTO {
  constructor(data: PaymentMethodDTO){
    Object.assign(this, data)
  }

  @ApiProperty({ enum: PaymentMethodEnum })
  @IsEnum(PaymentMethodEnum)
  type: PaymentMethodEnum;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  cardNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  cardHolder?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  expirationMonth?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  expirationYear?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  cvv?: string;
}
