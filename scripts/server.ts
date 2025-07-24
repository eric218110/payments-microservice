import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(express.json());

app.post('/braintree/transactions', (request, response) => {
  console.log(
    'request in /braintree/transactions',
    request.headers['user-agent'],
  );

  const fail = Math.random() < 0.1;

  const { amount = '', currency = '', statementDescriptor = '' } = request.body;

  if (fail) {
    response.json({
      id: uuidv4(),
      date: new Date().toISOString(),
      status: 'failed',
      amount,
      originalAmount: amount,
      currency,
      statementDescriptor,
      paymentType: 'card',
      cardId: uuidv4(),
    });

    return;
  }

  response.json({
    id: uuidv4(),
    date: new Date().toISOString(),
    status: 'paid',
    amount,
    originalAmount: amount,
    currency,
    statementDescriptor,
    paymentType: 'card',
    cardId: uuidv4(),
  });
});

app.post('/stripe/charges', (request, response) => {
  console.log('request in /stripe/charges', request.headers['user-agent']);

  const fail = Math.random() < 0.1;

  const { amount = '', currency = '', description = '' } = request.body;

  if (fail) {
    response.json({
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      status: 'failed',
      originalAmount: amount,
      currentAmount: amount,
      currency: currency,
      description,
      paymentMethod: 'card',
      cardId: uuidv4(),
    });

    return;
  }

  response.json({
    id: uuidv4(),
    createdAt: new Date().toISOString(),
    status: 'authorized',
    originalAmount: amount,
    currentAmount: amount,
    currency: currency,
    description,
    paymentMethod: 'card',
    cardId: uuidv4(),
  });
});

app.listen(3001, () => {
  console.log('🚀 Server running in port 3001');
});
