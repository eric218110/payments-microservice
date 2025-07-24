import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { PaymentMethodEnum } from '../enum/payment_methods.enum';

export class PaymentMethodDTO {
  constructor(data: PaymentMethodDTO) {
    Object.assign(this, data);
  }

  @ApiProperty({
    enum: PaymentMethodEnum,
    example: PaymentMethodEnum.CREDIT_CARD,
    description: 'Tipo do método de pagamento',
  })
  @IsEnum(PaymentMethodEnum)
  type: PaymentMethodEnum;

  @ApiProperty({
    example: 100.0,
    description: 'Valor a ser pago',
  })
  amount: number;

  @ApiProperty({
    example: 'BRL',
    description: 'Código da moeda no formato ISO 4217',
  })
  currency: string;

  @ApiPropertyOptional({
    example: '4111111111111111',
    description: 'Número do cartão de crédito',
  })
  @IsOptional()
  @IsString()
  cardNumber?: string;

  @ApiPropertyOptional({
    example: 'João da Silva',
    description: 'Nome do titular do cartão',
  })
  @IsOptional()
  @IsString()
  cardHolder?: string;

  @ApiPropertyOptional({
    example: '12',
    description: 'Mês de expiração do cartão (formato MM)',
  })
  @IsOptional()
  @IsString()
  expirationMonth?: string;

  @ApiPropertyOptional({
    example: '2026',
    description: 'Ano de expiração do cartão (formato AAAA)',
  })
  @IsOptional()
  @IsString()
  expirationYear?: string;

  @ApiPropertyOptional({
    example: '123',
    description: 'Código de verificação do cartão (CVV)',
  })
  @IsOptional()
  @IsString()
  cvv?: string;

  @ApiPropertyOptional({
    example: 3,
    description: 'Número de parcelas',
  })
  @IsOptional()
  @IsNumber()
  installments?: number;
}
