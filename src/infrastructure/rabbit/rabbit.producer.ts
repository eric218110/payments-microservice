import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ChannelModel, connect } from 'amqplib';
import { MessageProvider } from 'src/application/provider/message/message_provider';

@Injectable()
export class RabbitProducer implements MessageProvider<object>, OnModuleInit {
  private client: ClientProxy;
  private rabbitChannel: ChannelModel;
  private readonly logger = new Logger(RabbitProducer.name);

  async onModuleInit() {
    await this.connectInRabbit();
  }

  private async connectInRabbit() {
    const conn = await connect(process.env.RABBIT_CONNECTION_STRING);
    this.rabbitChannel = conn;

    this.logger.log('Connect in rabbit success');
  }

  private async sendToQueue(queueName: string, message: object) {
    try {
      const channel = await this.rabbitChannel.createChannel();
      await channel.assertQueue(queueName, { durable: true });

      channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));

      this.logger.log(
        `Send message queue: (${queueName}) content:\n ${JSON.stringify(message)}`,
      );

      return true;
    } catch (error) {
      this.logger.error(error);
      return false;
    }
  }

  async onSendMessage(queue: string, message: object): Promise<boolean> {
    const sendToQueue = await this.sendToQueue(queue, message);

    return sendToQueue;
  }
}
