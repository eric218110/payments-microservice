import {
  applyDecorators,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaymentMethodDTO } from 'src/domain/payment/dto/payment.dto';

export function ProcessPayment() {
  return applyDecorators(
    Post('payment'),
    HttpCode(HttpStatus.ACCEPTED),
    ApiResponse({
      status: 202,
      description: 'Init payment process',
      type: PaymentMethodDTO,
    }),
  );
}

export function PaymentControllerDecorator() {
  return applyDecorators(
    ApiHeader({
      name: 'x-service-provider',
      description:
        'Identify service provider (For test use: `bbb2adfb-d684-413f-96c4-0d0d247d7eb0`)',
      required: true,
      schema: {
        type: 'string',
        example: 'bbb2adfb-d684-413f-96c4-0d0d247d7eb0',
      },
    }),
    Controller('payment'),
    ApiTags('payment'),
  );
}
