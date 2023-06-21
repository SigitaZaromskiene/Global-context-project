import { createContext, useState } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [expense, setExpense] = useState("");
  const [sum, setSum] = useState("");
  const [date, setDate] = useState("");

  return (
    <Global.Provider
      value={{
        sum,
        setSum,
        expense,
        setExpense,

        date,
        setDate,
      }}
    >
      {children}
    </Global.Provider>
  );
};
