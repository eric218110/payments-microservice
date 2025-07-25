import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { ProviderStatusTypeEnum } from '../enum/payment_history_type.enum';
import { PaymentMethodEnum } from '../enum/payment_methods.enum';

export class PaymentResultDTO {
  constructor(data: PaymentResultDTO) {
    Object.assign(this, data);
  }

  @ApiProperty({ enum: PaymentMethodEnum })
  @IsString()
  payment_id: string;

  @ApiProperty({
    enum: ProviderStatusTypeEnum,
    example: ProviderStatusTypeEnum.SUCCESS,
    description: 'status do processamento',
  })
  @IsEnum(ProviderStatusTypeEnum)
  status: ProviderStatusTypeEnum;
}
