import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Prisma } from '@prisma/client';

/**
 * TransactionService is responsible for managing transactions in the database.
 */
@Injectable()
export class TransactionService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createTransactionDto: Prisma.TransactionCreateInput) {
    return this.databaseService.transaction.create({
      data: createTransactionDto,
    });
  }

  async findAll() {
    return this.databaseService.transaction.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.transaction.findUnique({
      where: {
        // @ts-ignore
        id,
      },
    });
  }

  async update(
    id: number,
    updateTransactionDto: Prisma.TransactionUpdateInput,
  ) {
    return this.databaseService.transaction.update({
      where: {
        // @ts-ignore
        id,
      },
      data: updateTransactionDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.transaction.delete({
      where: {
        // @ts-ignore
        id,
      },
    });
  }
}
