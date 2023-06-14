function ExpensesForm() {
  return (
    <div className="expenses-form">
      <div className="input-container">
        <label>Expense</label>
        <input className="input-expense" type="text"></input>
      </div>
      <div className="input-container">
        <label>Sum</label>
        <input type="number"></input>
      </div>
      <div className="input-container">
        <label>Date</label>
        <input type="date" min="2023-01-01" max="2023-12-31"></input>
      </div>
    </div>
  );
}

export default ExpensesForm;
