import { useContext, useState } from "react";
import { Global } from "./Global";

function ExpensesForm({ setDetails, setMessage, setPrimaryForm, setFormAdd }) {
  const { sum, setSum, expense, setExpense, date, setDate } =
    useContext(Global);

  const [errorFrame, setErrorFrame] = useState(false);

  const detailsHandler = () => {
    if (!sum || !expense || !date) {
      setMessage("Please fill all information");
      setErrorFrame(true);
      setTimeout(() => {
        setMessage("");
        setErrorFrame(false);
      }, 2000);

      setExpense("");
      setSum("");
      setDate("");
    } else if (typeof expense !== "string" || expense.length < 3) {
      setMessage("Expense is too short");
      setTimeout(() => {
        setMessage("");
      }, 2000);

      setExpense("");
      setSum("");
      setDate("");
    } else if (!isFinite(sum) || sum % 1 !== 0) {
      setMessage("Sum is not correct");
      setTimeout(() => {
        setMessage("");
      }, 2000);

      setExpense("");
      setSum("");
      setDate("");
    } else {
      setDetails({
        expense: expense,
        sum: parseInt(sum),
        date: date,
      });
      setExpense("");
      setSum("");
      setDate("");
      setPrimaryForm(true);
      setFormAdd(false);
    }
  };

  return (
    <div className="expenses-form">
      <form className="input-container">
        <label>Expense</label>
        <input
          className={`input-expense ${errorFrame ? "redFrame" : ""}`}
          type="text"
          value={expense}
          required
          onChange={(e) => setExpense(e.target.value)}
        ></input>
      </form>
      <form className="input-container">
        <label>Sum</label>
        <input
          className={`input-sum ${errorFrame ? "redFrame" : ""}`}
          type="number"
          value={sum}
          required
          onChange={(e) => setSum(e.target.value)}
        ></input>
      </form>
      <form className="input-container">
        <label>Date</label>
        <input
          className={`input-sum ${errorFrame ? "redFrame" : ""}`}
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
