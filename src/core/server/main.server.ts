import { NestFactory } from '@nestjs/core';
import { setupSwagger } from '../config/swagger/config';
import { CoreModule } from '../module/core.module';

const bootstrapServer = async () => {
  const app = await NestFactory.create(CoreModule);
  setupSwagger(app)

  await app.listen(3000);
};

bootstrapServer();
