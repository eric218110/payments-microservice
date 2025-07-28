import {
  applyDecorators,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HistoryResponseDTO } from 'src/domain/history/dto/history_response.dto';

export function HistoryPayment() {
  return applyDecorators(
    Get('paymentHistory'),
    HttpCode(HttpStatus.OK),
    ApiResponse({
      status: 200,
      description: 'Load history',
      type: HistoryResponseDTO,
      isArray: true,
    }),
  );
}

export function HistoryControllerDecorator() {
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
    Controller(),
    ApiTags('history'),
  );
}
