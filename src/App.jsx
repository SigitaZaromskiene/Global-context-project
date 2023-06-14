import { v4 as uuidv4 } from "uuid";
import "./App.scss";
import AddNewExpenseForm from "./Components/AddNewExpenseForm";
import ExpensesForm from "./Components/ExpensesForm";
import { GlobalProvider } from "./Components/Global";
import ExpensesList from "./Components/ExpensesList";

function App() {
  return (
    <GlobalProvider>
      <div className="app-container">
        <div className="app-content">
          <AddNewExpenseForm />
          <ExpensesForm />
          <ExpensesList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
