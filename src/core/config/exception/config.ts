import { INestApplication } from '@nestjs/common';
import { AllExceptionsFilter } from 'src/domain/shared/exception/all_exceptions.filter.ts';

export const setupException = (app: INestApplication<any>) => {
  app.useGlobalFilters(new AllExceptionsFilter());
};
