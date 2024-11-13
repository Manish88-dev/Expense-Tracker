import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ expenses }) => {
  const categories = [...new Set(expenses.map((expense) => expense.category))];

  const data = categories.map((category) => {
    return expenses
      .filter((expense) => expense.category === category)
      .reduce((total, expense) => total + expense.amount, 0);
  });

  const chartData = {
    labels: categories,
    datasets: [
      {
        data: data,
        backgroundColor: ['#FF5733', '#FFBD33', '#FF9133', '#33FF57'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart">
      <h2>Expense Breakdown</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default Chart;
