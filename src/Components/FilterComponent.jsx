import { useState } from "react";

function FilterComponent({ dataList }) {
  const [year, setYear] = useState(2023);
  const selectHandler = (e) => {
    setYear(e.target.value);

    dataList.filter((li) => li.date);
  };
  return (
    <div
      style={{
        backgroundColor: "purple",
        gap: "0px",
        width: "1000px",
        borderRadius: "15px",
        color: "white",
      }}
    >
      <div className="filter-container">
        <p>Filter by year</p>
        <select
          style={{ fontSize: "18px", padding: "5px", cursor: "pointer" }}
          value={year}
          onChange={selectHandler}
        >
          {" "}
          <option value="All">All</option>
          <option value="2023">2023</option>
          <option value="2022"> 2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
      <div></div>
    </div>
  );
}

export default FilterComponent;
