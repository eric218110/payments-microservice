import { MessageProvider } from 'src/application/provider/message/message_provider';

class MessageProviderFake implements MessageProvider<object> {
  onSendMessage(): Promise<boolean> {
    return Promise.resolve(true);
  }
}

export const fakes = {
  messageProviderFake: new MessageProviderFake(),
};
