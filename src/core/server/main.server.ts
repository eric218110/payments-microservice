import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
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
  await setupListen(app);
};

bootstrapServer();
