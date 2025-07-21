// src/common/decorators/headers-dto.decorator.ts
import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { Request } from 'express';

export function HeadersDto<T extends object>() {
  return createParamDecorator(
    (DtoClass: new () => T, ctx: ExecutionContext): T => {
      const request: Request = ctx.switchToHttp().getRequest<Request>();
      const instance = plainToInstance(DtoClass, request.headers, {
        enableImplicitConversion: true,
      });

      const errors = validateSync(instance, { whitelist: true });

      if (errors.length > 0) {
        throw new BadRequestException(errors);
      }

      return instance as T;
    },
  )();
}
