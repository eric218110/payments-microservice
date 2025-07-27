import { IsEnum, IsString } from 'class-validator';
import { ProviderStatusTypeEnum } from '../enum/payment_history_type.enum';

export class PaymentHistoryModel {
  constructor(data: PaymentHistoryModel) {
    Object.assign(this, data);
  }

  @IsString()
  payment_id: string;

  @IsEnum(ProviderStatusTypeEnum)
  status: ProviderStatusTypeEnum;

  @IsString()
  tenantId: string;
}
