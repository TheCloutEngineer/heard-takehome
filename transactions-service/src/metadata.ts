/* eslint-disable */
export default async () => {
  return {
    '@nestjs/swagger': {
      models: [],
      controllers: [
        [
          import('./app.controller'),
          { AppController: { healthCheck: { type: String } } },
        ],
        [
          import('./transactions/transaction.controller'),
          {
            TransactionController: {
              create: { description: 'Creates a new transaction.' },
              findAll: { description: 'Get all transactions.' },
              findOne: { description: 'Find one transaction by id' },
              update: {
                description: 'PATCH endpoint to update a transaction.',
              },
              remove: { description: 'Removes a transaction by its ID.' },
            },
          },
        ],
      ],
    },
  };
};
