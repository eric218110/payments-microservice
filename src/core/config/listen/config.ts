import { INestApplication } from '@nestjs/common';

export const setupListen = async (app: INestApplication<any>) => {
  await app.listen(process.env.SERVER_PORT);
};
