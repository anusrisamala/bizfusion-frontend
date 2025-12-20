import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Dot } from "recharts";
import { getAnalyticsData } from "../../services/dataStore";
import Loader from "../common/Loader";

function SalesChart() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadChart = () => {
      const analytics = getAnalyticsData();
      const last7Days = analytics.salesTrend.slice(-7);

      // Add trend info for coloring
      const coloredData = last7Days.map((d, i, arr) => ({
        ...d,
        trend: i === 0 ? "neutral" : d.sales >= arr[i - 1].sales ? "up" : "down",
      }));

      setData(coloredData);
    };

    loadChart(); // initial load
    const interval = setInterval(loadChart, 10000); // refresh every 10 sec
    return () => clearInterval(interval);
  }, []);

  if (!data) return <Loader />;

  // Custom dot to show green/red based on trend
  const CustomDot = (props) => {
    const { cx, cy, payload } = props;
    let fill = "#8884d8"; // neutral
    if (payload.trend === "up") fill = "#28a745";
    if (payload.trend === "down") fill = "#dc3545";
    return <circle cx={cx} cy={cy} r={5} fill={fill} stroke="#000" strokeWidth={1} />;
  };

  return (
    <div className="card p-3 mb-4">
      <h5>Last 7 Days Sales</h5>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            dot={<CustomDot />}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
