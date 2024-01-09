"use client"
import Table from '@/app/Components/Table';
import React, { useState } from 'react';
import axios from 'axios';
interface Transaction {
  id: number | null;
  title: string;
  description: string;
  amount: number;
  fromAccount: string;
  toAccount: string;
  transactionDate: string;
}
export default function Home() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State for Add Transaction modal
  const [newTransaction, setNewTransaction] = useState({
    title: '',
    description: '',
    amount: '',
    fromAccount: '',
    toAccount: '',
    transactionDate: '',
  });
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 1,
      title: 'Test',
      description: 'Test',
      amount: 100,
      fromAccount: 'Test',
      toAccount: 'Test',
      transactionDate: 'Test',
    },
  ]);
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({
      ...newTransaction,
      [name]: value,
    });
  };

  // Function to submit the new transaction data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your API to save the new transaction
      const response = await axios.post('http://localhost:8080/transactions', newTransaction);

      // Check for a successful response (you may need to adjust the response structure)
      if (response.status === 200) {
        // Handle a successful save
        console.log('Transaction saved successfully');
        setIsAddModalOpen(false); // Close the modal
        // You may want to refresh the table or perform other actions here
      } else {
        console.error('Transaction save failed');
      }
    } catch (error) {
      console.error('Error saving transaction:', error);
    }
  };
  return (
    <div className="flex flex-col items-center mt-6">
    <main>
      <h1 className="text-5xl text-center">Transactions</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add Transaction
        </button>
        <Table />
      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-1/3 p-4 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  onChange={handleInputChange}
                  value={newTransaction.title}
                  className="mt-1 p-2 w-full text-black rounded border-gray-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="Description"
                  onChange={handleInputChange}
                  value={newTransaction.description}
                  className="mt-1 p-2 w-full text-black rounded border-gray-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Amount
                </label>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  onChange={handleInputChange}
                  value={newTransaction.amount}
                  className="mt-1 p-2 w-full text-black rounded border-gray-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  From Account
                </label>
                <input
                  type="text"
                  id="fromAccount"
                  name="fromAccount"
                  onChange={handleInputChange}
                  value={newTransaction.fromAccount}
                  className="mt-1 p-2 w-full text-black rounded border-gray-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  To Account
                </label>
                <input
                  type="text"
                  id="toAccount"
                  name="toAccount"
                  onChange={handleInputChange}
                  value={newTransaction.toAccount}
                  className="mt-1 p-2 w-full text-black rounded border-gray-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Transaction Date
                </label>
                <input
                  type="text"
                  id="transactionDate"
                  name="transactionDate"
                  onChange={handleInputChange}
                  value={newTransaction.transactionDate}
                  className="mt-1 p-2 w-full text-black rounded border-gray-300"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-black font-semibold px-4 py-2 rounded mr-2"
                  onClick={() => setIsAddModalOpen(false)} // Close modal
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
    </div>
  )
}
