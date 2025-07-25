import { INestApplication } from '@nestjs/common';

export const setupRabbit = (app: INestApplication<any>) => {
  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [process.env.RABBIT_CONNECTION_STRING],
  //     queue: tokensQueue.processPayment,
  //     queueOptions: { durable: true },
  //   },
  // });

  return app;
};
