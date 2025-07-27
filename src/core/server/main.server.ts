import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
import { setupCors } from '../config/cors/config';
import { setupException } from '../config/exception/config';
import { setupListen } from '../config/listen/config';
import { setupMicroservices } from '../config/microservices/config';
import { setupSwagger } from '../config/swagger/config';
import { CoreModule } from '../module/core.module';

const bootstrapServer = async () => {
  const app = await NestFactory.create(CoreModule);

  setupSwagger(app);
  setupException(app);

  await setupMicroservices(app);
  setupCors(app);
  await setupListen(app);
};

bootstrapServer();
