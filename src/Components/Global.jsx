import { createContext, useState } from "react";
import AddNewExpenseForm from "./AddNewExpenseForm";

export const Global = createContext();

const GlobalProvider = ({ children }) => {
  const [formAdd, formAddHandler] = useState(AddNewExpenseForm);

  return <Global.Provider value={formAddHandler}>{children}</Global.Provider>;
};

export default GlobalProvider;
