import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <strong>{expense.category}</strong> - ₹{expense.amount} <br />
            <small>{expense.description}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
