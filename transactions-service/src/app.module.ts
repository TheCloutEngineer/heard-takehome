import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TransactionModule } from './transactions/transaction.module';

@Module({
  imports: [DatabaseModule, TransactionModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
