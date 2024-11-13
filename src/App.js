import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Chart from './components/Chart';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  const addExpense = (expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
    setTotal(total + expense.amount);
  };
  
  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <Chart expenses={expenses} />
      <ExpenseList expenses={expenses} />
      <h2>Total Expenses: ₹{total}</h2>
    </div>
  );
}

export default App;
