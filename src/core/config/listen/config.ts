import { INestApplication, Logger } from '@nestjs/common';

export const setupListen = async (app: INestApplication<any>) => {
  const logger = new Logger('ListenConfig');
  const { SERVER_PORT: port = '3000' } = process.env;

  await app.listen(port);

  logger.log(`Server running in port ${port}`);
};
