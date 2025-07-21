import { INestApplication } from '@nestjs/common';
import { AllExceptionsFilter } from 'src/domain/exception/all_exceptions.filter.ts';

export const setupException = (app: INestApplication<any>) => {
  app.useGlobalFilters(new AllExceptionsFilter());
};
