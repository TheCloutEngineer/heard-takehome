import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Prisma } from '@prisma/client';

/**
 * TransactionController handles the HTTP requests related to transactions.
 */
@Controller('transactions')
export class TransactionController {
  /**
   * Creates an instance of the constructor.
   *
   * @param {TransactionService} transactionService - The transaction service object.
   */
  constructor(private readonly transactionService: TransactionService) {}

  /**
   * Creates a new transaction.
   * @param {Prisma.TransactionCreateInput} createTransactionDto - The transaction data to be created.
   * @return {Promise<any>} - The created transaction.
   */
  @Post()
  create(@Body() createTransactionDto: Prisma.TransactionCreateInput) {
    return this.transactionService.create(createTransactionDto);
  }

  /**
   * Get all transactions.
   *
   * @returns {Transaction[]} Array of transactions.
   */
  @Get()
  findAll() {
    return this.transactionService.findAll();
  }

  /**
   * Find one transaction by id
   *
   * @param {number} id - The id of the transaction
   * @return {any} The found transaction or undefined if not found
   */
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.transactionService.findOne(+id);
  }

  /**
   * PATCH endpoint to update a transaction.
   *
   * @param {number} id - The ID of the transaction to be updated.
   * @param {Prisma.TransactionUpdateInput} updateTransactionDto - The input data for updating the transaction.
   * @return {Promise<Prisma.Transaction>} - The updated transaction.
   */
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateTransactionDto: Prisma.TransactionUpdateInput,
  ) {
    return this.transactionService.update(+id, updateTransactionDto);
  }

  /**
   * Removes a transaction by its ID.
   *
   * @param {number} id - The ID of the transaction to be removed.
   * @return {Promise<void>}
   */
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.transactionService.remove(+id);
  }
}
