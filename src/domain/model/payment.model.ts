import { IsString } from 'class-validator';

export class PaymentModel {
  constructor(data: PaymentModel) {
    Object.assign(this, data);
  }

  @IsString()
  payment_id: string;
}
