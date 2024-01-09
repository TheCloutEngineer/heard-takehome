// components/Table.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Table = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/transactions');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); // The empty dependency array ensures this effect runs only once


  // Function to add a new transaction
  const addTransaction = () => {
    const newTransaction = {
      // @ts-ignore
      id: transactions.length + 1,
      title: 'New Transaction',
      description: 'Description',
      amount: 0.00,
      fromAccount: 'From Account',
      toAccount: 'To Account',
      transactionDate: new Date().toISOString(),
    };

    // @ts-ignore
    setTransactions([...transactions, newTransaction]);
  };

  // Function to edit a transaction
  const editTransaction = (id: number) => {
    console.log(`Edit transaction with ID ${id}`);
  };

  // Function to delete a transaction
  const deleteTransaction = (id: number) => {
    // @ts-ignore
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    // @ts-ignore
    setTransactions(updatedTransactions);
  };
  return (
    <div className="w-2/3 mx-auto border border-black p-9">
    <table className="w-full divide-y divide-gray-200">
    <thead className="bg-gray-100">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
    Title
    </th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
    Description
    </th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
    Amount
    </th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
    From Account
  </th>
  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
    To Account
  </th>
  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
    Transaction Date
  </th>
  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
    Actions
    </th>
    </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
    {data.map((transaction) => (
      // @ts-ignore
      <tr key={transaction.id}>
        <td className="px-4 py-2 font-medium text-black whitespace-nowrap">{transaction.title}</td>
        <td className="px-4 py-2 font-medium text-black whitespace-nowrap">{transaction.description}</td>
        <td className="px-4 py-2 font-medium text-black whitespace-nowrap">${transaction.amount.toFixed(2)}</td>
        <td className="px-4 py-2 font-medium text-black whitespace-nowrap">{transaction.fromAccount}</td>
        <td className="px-4 py-2 font-medium text-black whitespace-nowrap">{transaction.toAccount}</td>
        <td className="px-4 py-2 font-medium text-black whitespace-nowrap">{transaction.transactionDate}</td>
        <td className="px-4 py-2 font-medium text-black whitespace-nowrap">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete
          </button>
        </td>
      </tr>
    ))}
    </tbody>
    </table>
    </div>
  );
};

export default Table;
