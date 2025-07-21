import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { PaymentMethodEnum } from '../enum/payment_methods.enum';

export class PaymentResultDTO {
  constructor(data: PaymentResultDTO) {
    Object.assign(this, data);
  }

  @ApiProperty({ enum: PaymentMethodEnum })
  @IsString()
  payment_id: string;
}
