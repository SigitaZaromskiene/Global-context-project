import { Global } from "./Global";
import { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function ExpensesList({ dataList }) {
  if (dataList === null) {
    return "Loading...";
  }
  return (
    <>
      {dataList.map((d) => (
        <div key={uuidv4()} className="form-container">
          <div className="form-content">
            <p>{d.expense}</p>
            <div style={{ display: "flex", gap: "40px", width: "280px" }}>
              <p>{d.sum} &euro;</p>
              <p>{d.date}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ExpensesList;
