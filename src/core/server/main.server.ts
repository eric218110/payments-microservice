import { NestFactory } from '@nestjs/core';
import { CoreModule } from '../module/core.module';

const bootstrapServer = async () => {
  const app = await NestFactory.create(CoreModule);
  await app.listen(3000);
};

bootstrapServer();
