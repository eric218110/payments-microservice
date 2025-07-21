import { INestApplication } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export const setupRabbit = (app: INestApplication<any>) => {
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@localhost:5672'],
      queue: 'payment_queue',
      queueOptions: { durable: true },
    },
  });

  return app;
};
