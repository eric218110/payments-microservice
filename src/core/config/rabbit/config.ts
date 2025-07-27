import { INestApplication } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { tokensQueue } from 'src/domain/shared/tokens/tokens_queue';

export const setupRabbit = (app: INestApplication<any>) => {
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBIT_CONNECTION_STRING],
      queue: tokensQueue.processPaymentOut,
      queueOptions: {
        durable: true,
      },
    },
  });

  return app;
};
