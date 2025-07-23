type PaymentType = 'card';

export class StripperBodyModel {
  amount: number;
  currency: string; // ISO 4217
  description: string;
  paymentMethod: {
    type: PaymentType;
    card: {
      number: string;
      holderName: string;
      cvv: string;
      expirationDate: string; // DD/YYYY
      installments: number;
    };
  };
}
