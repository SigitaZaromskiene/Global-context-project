import { Global } from "./Global";
import { useContext } from "react";

function ExpensesList() {
  const { details } = useContext(Global);

  console.log(details);

  return (
    <>
      {!details
        ? null
        : details.map((d) => (
            <div className="form-container">
              <p>{d.expense}</p>
            </div>
          ))}
    </>
  );
}

export default ExpensesList;
