import { useContext, useState } from "react";
import { Global } from "./Global";

function ExpensesForm() {
  const {
    setDetails,
    sum,
    setSum,
    expense,
    setExpense,
    date,
    setDate,
    details,
  } = useContext(Global);

  const detailsHandler = () => {
    setDetails((li) => [
      ...li,
      {
        expense: expense,
        sum: parseInt(sum),
        date: date,
      },
    ]);
    setExpense("");
    setSum(0);
    setDate(Date.now());
  };

  console.log(details);
  return (
    <div className="expenses-form">
      <div className="input-container">
        <label>Expense</label>
        <input
          className="input-expense"
          type="text"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        ></input>
      </div>
      <div className="input-container">
        <label>Sum</label>
        <input
          type="number"
          value={sum}
          onChange={(e) => setSum(e.target.value)}
        ></input>
      </div>
      <div className="input-container">
        <label>Date</label>
        <input
          type="date"
          min="2023-01-01"
          max="2023-12-31"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>
      <button className="submit-btn" onClick={detailsHandler}>
        Submit
      </button>
    </div>
  );
}

export default ExpensesForm;
