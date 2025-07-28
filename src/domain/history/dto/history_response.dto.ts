import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { ProviderStatusTypeEnum } from 'src/domain/payment/enum/payment_history_type.enum';

export class HistoryResponseDTO {
  constructor(data: HistoryResponseDTO) {
    Object.assign(this, data);
  }

  @ApiProperty({
    example: 'cmdmil3qr000xnzk6piwqcgsf',
    description: 'Payment Id',
  })
  payment_id: string;

  @ApiProperty({
    example: '2025-07-28T03:31:34.749Z',
    description: 'Created time',
  })
  created_at: string;

  @ApiProperty({
    enum: ProviderStatusTypeEnum,
    example: ProviderStatusTypeEnum.SUCCESS,
    description: 'status of process',
  })
  @IsEnum(ProviderStatusTypeEnum)
  status: ProviderStatusTypeEnum;
}
