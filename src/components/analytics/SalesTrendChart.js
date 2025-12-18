import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import { fetchAnalyticsData } from "../../services/mockApi";
import Loader from "../common/Loader";

function SalesTrendChart() {
  const [data, setData] = useState(null);

  const loadData = () => {
    setData(null);
    fetchAnalyticsData().then((res) => {
      setData(res.salesTrend);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  if (!data) return <Loader />;

  return (
    <div className="card p-3 mb-4">
      <div className="d-flex justify-content-between">
        <h5>Sales Trend</h5>
        <button className="btn btn-sm btn-outline-primary" onClick={loadData}>
          Refresh
        </button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesTrendChart;
