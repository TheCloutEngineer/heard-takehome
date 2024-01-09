import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { AppController } from '../app.controller';

@Module({
  controllers: [TransactionController, AppController],
  providers: [TransactionService],
})
export class TransactionModule {}
