import React from "react";
import './ResultsTable.css';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function ResultsTable(props) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      {props.data.map((yeardata) => {
        return (
          <tbody>
            <tr key={yeardata.year}>
              <td>{yeardata.year}</td>
              <td>{formatter.format(yeardata.savingsEndOfYear)}</td>
              <td>{formatter.format(yeardata.yearlyInterest)}</td>
              <td>{formatter.format(yeardata.savingsEndOfYear - props.initialInvestment - yeardata.yearlyContribution * yeardata.year)}</td>
              <td>{formatter.format(props.initialInvestment + yeardata.yearlyContribution * yeardata.year)}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default ResultsTable;