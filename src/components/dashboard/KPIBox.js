import { useEffect, useState } from "react";

function KPIBox({ title, value, color }) {
  const [prevValue, setPrevValue] = useState(value);
  const [trend, setTrend] = useState("same");

  useEffect(() => {
    if (value > prevValue) setTrend("up");
    else if (value < prevValue) setTrend("down");
    else setTrend("same");

    setPrevValue(value);
  }, [value]);

  const getTrendIcon = () => {
    if (trend === "up") return "↑";
    if (trend === "down") return "↓";
    return "→";
  };

  const getAIMessage = () => {
    if (trend === "up") return "🤖 Performance improved compared to last update.";
    if (trend === "down") return "🤖 Drop detected. Monitor closely.";
    return "🤖 Stable performance.";
  };

  return (
    <div className="col-md-3 mb-3">
      <div
        className={`card text-white bg-${color} h-100 ${
          trend === "down" ? "border border-warning border-3" : ""
        }`}
      >
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <h3>
            {value} {getTrendIcon()}
          </h3>
          <small>{getAIMessage()}</small>
        </div>
      </div>
    </div>
  );
}

export default KPIBox;
