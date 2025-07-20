import { applyDecorators, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { PaymentMethodDTO } from 'src/domain/payment/dto/payment.dto';

export function ProcessPayment() {
  return applyDecorators(
    Post('payment'),
    ApiResponse({
      status: 202,
      description: 'Init payment process',
      type: PaymentMethodDTO,
    }),
  );
}
