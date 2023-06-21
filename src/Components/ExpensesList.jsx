import { v4 as uuidv4 } from "uuid";

function ExpensesList({ dataList, year }) {
  if (dataList === null) {
    return "Loading...";
  }

  const filtered = dataList.filter((d) => d.date.slice(0, 4) === year);
  return (
    <>
      {filtered.length === 0 ? (
        <p style={{ fontSize: "24px", color: "white" }}>No expenses found</p>
      ) : (
        filtered.map((d) => (
          <div key={uuidv4()} className="form-container">
            <div className="form-content">
              <p>{d.expense}</p>
              <div style={{ display: "flex", gap: "40px", width: "280px" }}>
                <p>{d.sum} &euro;</p>
                <p>{d.date}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default ExpensesList;
