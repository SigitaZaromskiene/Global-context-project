import { useContext, useState } from "react";
import { Global } from "./Global";

function ExpensesForm({ setDetails }) {
  const { sum, setSum, expense, setExpense, date, setDate } =
    useContext(Global);

  const detailsHandler = () => {
    setDetails({
      expense: expense,
      sum: parseInt(sum),
      date: date,
    });
    setExpense("");
    setSum(0);
    setDate(Date.now());
  };

  return (
    <div className="expenses-form">
      <form className="input-container">
        <label>Expense</label>
        <input
          className="input-expense"
          type="text"
          value={expense}
          required
          onChange={(e) => setExpense(e.target.value)}
        ></input>
      </form>
      <form className="input-container">
        <label>Sum</label>
        <input
          type="number"
          value={sum}
          required
          onChange={(e) => setSum(e.target.value)}
        ></input>
      </form>
      <form className="input-container">
        <label>Date</label>
        <input
          type="date"
          min="2021-01-01"
          max="2023-12-31"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </form>
      <button type="submit" className="submit-btn" onClick={detailsHandler}>
        Submit
      </button>
    </div>
  );
}

export default ExpensesForm;
