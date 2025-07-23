import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { Request } from 'express';
import { TenantHeaderDto } from 'src/domain/tenant/dto/tenant_in_header.dto';

export function TenantHeader<T extends object>() {
  return createParamDecorator(
    (_: new () => T, ctx: ExecutionContext): TenantHeaderDto => {
      const { headers = {} }: Request = ctx
        .switchToHttp()
        .getRequest<Request>();
      const { 'x-service-prodiver': xServiceProvider = '' } = headers;

      if (typeof xServiceProvider !== 'string') {
        throw new BadRequestException('header x-service-prodiver is invalid');
      }

      if (!xServiceProvider) {
        throw new BadRequestException('header x-service-prodiver not found');
      }

      return new TenantHeaderDto({ tenantId: xServiceProvider });
    },
  )();
}
