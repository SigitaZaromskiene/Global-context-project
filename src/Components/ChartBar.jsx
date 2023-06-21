function ChartBar({ m, height }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="chartBar">
        <div className="chartBar-inside"></div>
      </div>
      <p>{m}</p>
    </div>
  );
}

export default ChartBar;
