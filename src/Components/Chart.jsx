import ChartBar from "./ChartBar";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

function Chart() {
  return (
    <div className="chartBarContainer">
      {months.map((m, i) => (
        <ChartBar key={i} m={m} />
      ))}
    </div>
  );
}

export default Chart;
