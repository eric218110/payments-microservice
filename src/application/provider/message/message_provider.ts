export interface MessageProvider<T extends object> {
  onSendMessage(queue: string, message: T): Promise<boolean>;
}
