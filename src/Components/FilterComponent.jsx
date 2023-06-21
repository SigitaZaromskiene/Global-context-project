function FilterComponent({ year, setYear }) {
  return (
    <div
      style={{
        backgroundColor: "purple",
        gap: "0px",
        width: "1000px",
        borderRadius: "15px",
        color: "white",
        marginTop: "40px",
      }}
    >
      <div className="filter-container">
        <p>Filter by year</p>
        <select
          style={{ fontSize: "18px", padding: "5px 15px", cursor: "pointer" }}
          onChange={(e) => setYear(e.target.value)}
          value={year}
        >
          {" "}
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
      <div></div>
    </div>
  );
}

export default FilterComponent;
