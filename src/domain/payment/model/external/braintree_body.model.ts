type PaymentType = 'card';

export class BrainTreeBodyModel {
  amount: number;
  currency: string; // ISO 4217
  statementDescriptor: string;
  paymentType: PaymentType;
  card: {
    number: string;
    holderstring: string;
    cvv: string;
    expiration: string; // DD/YYYY
    installmentNumber: number;
  };
}
