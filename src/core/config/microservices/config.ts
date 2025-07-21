import { INestApplication } from '@nestjs/common';
import { setupRabbit } from '../rabbit/config';

export const setupMicroservices = async (app: INestApplication<any>) => {
  const microservicesAppWithRabbit = setupRabbit(app);

  await microservicesAppWithRabbit.startAllMicroservices();
};
