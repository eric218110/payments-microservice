import { NestFactory } from '@nestjs/core';
import { setupMicroservices } from '../config/microservices/config';
import { setupSwagger } from '../config/swagger/config';
import { CoreModule } from '../module/core.module';

const bootstrapServer = async () => {
  const app = await NestFactory.create(CoreModule);
  setupSwagger(app);
  await setupMicroservices(app);
};

bootstrapServer();
