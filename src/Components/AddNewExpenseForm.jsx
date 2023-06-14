import { useContext } from "react";
import { Global } from "./Global";

function AddNewExpenseForm({ setFormAdd, setPrimaryForm }) {
  const addFormHandler = () => {
    setFormAdd(true);
    setPrimaryForm(false);
  };
  return (
    <div className="form-container">
      <button className="button-add" onClick={addFormHandler}>
        Add new expense
      </button>
    </div>
  );
}

export default AddNewExpenseForm;
