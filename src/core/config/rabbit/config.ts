import { INestApplication } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export const setupRabbit = (app: INestApplication<any>) => {
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBIT_CONNECTION_STRING],
      queue: 'payment_queue',
      queueOptions: { durable: true },
    },
  });

  return app;
};
