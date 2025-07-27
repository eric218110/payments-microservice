import { INestApplication } from '@nestjs/common';

export const setupCors = (app: INestApplication<any>) => {
  app.enableCors({
    origin: ['http://localhost:8080'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });
};
