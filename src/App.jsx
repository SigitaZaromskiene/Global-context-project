import { v4 as uuidv4 } from "uuid";
import "./App.scss";
import AddNewExpenseForm from "./Components/AddNewExpenseForm";
import ExpensesForm from "./Components/ExpensesForm";

function App() {
  return (
    <div className="app-container">
      <div className="app-content">
        <AddNewExpenseForm />
        <ExpensesForm />
      </div>
    </div>
  );
}

export default App;
