import { IsEnum, IsString } from 'class-validator';
import { ProviderHistoryStatusTypeEnum } from '../enum/payment_history_type.enum';

export class PaymentHistoryModel {
  constructor(data: PaymentHistoryModel) {
    Object.assign(this, data);
  }

  @IsString()
  payment_id: string;

  @IsEnum(ProviderHistoryStatusTypeEnum)
  status: ProviderHistoryStatusTypeEnum;
}
