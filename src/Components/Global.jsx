import { createContext, useState } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [expense, setExpense] = useState("");
  const [sum, setSum] = useState(0);
  const [date, setDate] = useState(Date.now());

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
