import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { connect } from 'amqplib';
import { lastValueFrom } from 'rxjs';
import { MessageProvider } from 'src/application/provider/message/message_provider';

@Injectable()
export class RabbitProducer implements MessageProvider<object>, OnModuleInit {
  private client: ClientProxy;
  private readonly logger = new Logger(RabbitProducer.name);

  onModuleInit() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBIT_CONNECTION_STRING],
      },
    });
  }

  private async createQueueWhenDoesNotExists(queueName: string) {
    const conn = await connect(process.env.RABBIT_CONNECTION_STRING);
    const channel = await conn.createChannel();
    await channel.assertQueue(queueName, { durable: true });
    await channel.close();
    await conn.close();
  }

  async onSendMessage(queue: string, message: object): Promise<boolean> {
    try {
      await this.createQueueWhenDoesNotExists(queue);
      const observable = this.client.emit(queue, JSON.stringify(message));
      await lastValueFrom(observable);
      this.logger.log(`Message producer in ${queue}`);
      return true;
    } catch (error) {
      console.error(`fail send ${queue}:`, error);
      return Promise.resolve(false);
    }
  }
}
