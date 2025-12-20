
// import { useEffect, useState, useCallback } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";
// import Loader from "../common/Loader";
// import { getAnalyticsData } from "../../services/dataStore";
// import { useAnalytics } from "../../context/AnalyticsContext";

// function SalesTrendChart() {
//   const { filter } = useAnalytics();
//   const [data, setData] = useState(null);

//   const loadData = useCallback(() => {
//     setData(null); // show loader
//     const allData = getAnalyticsData();
//     let filteredData = allData.salesTrend;

//     if (filter === "7") filteredData = allData.salesTrend.slice(-7);
//     if (filter === "30") filteredData = allData.salesTrend.slice(-7); // demo data
//     if (filter === "month") filteredData = allData.salesTrend.slice(-7);

//     setData(filteredData);
//   }, [filter]);

//   useEffect(() => {
//     loadData();
//   }, [loadData]);

//   if (!data) return <Loader />;

//   return (
//     <div className="card p-3 mb-4">
//       <div className="d-flex justify-content-between align-items-center">
//         <h5>Sales Trend</h5>
//         <button
//           className="btn btn-sm btn-outline-primary"
//           onClick={loadData}
//         >
//           Refresh
//         </button>
//       </div>

//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="day" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="sales" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default SalesTrendChart;
// import { useEffect, useState, useCallback } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";
// import Loader from "../common/Loader";
// import { getAnalyticsData } from "../../services/dataStore";
// import { useAnalytics } from "../../context/AnalyticsContext";

// function SalesTrendChart() {
//   const { filter } = useAnalytics();
//   const [data, setData] = useState(null);

//   const loadData = useCallback(() => {
//     setData(null);
//     const allData = getAnalyticsData();
//     let filteredData = allData.salesTrend;

//     if (filter === "7") filteredData = allData.salesTrend.slice(-7);
//     if (filter === "30") filteredData = allData.salesTrend.slice(-30);
//     if (filter === "month") filteredData = allData.salesTrend.slice(-30); // assume last month = last 30 days

//     setData(filteredData);
//   }, [filter]);

//   useEffect(() => {
//     loadData();
//   }, [loadData]);

//   if (!data) return <Loader />;

//   return (
//     <div className="card p-3 mb-4">
//       <div className="d-flex justify-content-between align-items-center">
//         <h5>Sales Trend</h5>
//         <button className="btn btn-sm btn-outline-primary" onClick={loadData}>
//           Refresh
//         </button>
//       </div>

//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="day" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="sales" stroke="#8884d8" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default SalesTrendChart;
import { useEffect, useState, useCallback } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Loader from "../common/Loader";
import { getAnalyticsData } from "../../services/dataStore";
import { useAnalytics } from "../../context/AnalyticsContext";

function SalesTrendChart() {
  const { filter } = useAnalytics();
  const [data, setData] = useState(null);

  const loadData = useCallback(() => {
    setData(null);
    const allData = getAnalyticsData();
    let filteredData = allData.salesTrend;

    const today = new Date();

    if (filter === "7") {
      filteredData = allData.salesTrend.slice(-7);
    } else if (filter === "30") {
      filteredData = allData.salesTrend.slice(-30);
    } else if (filter === "month") {
      // Filter by month
      filteredData = allData.salesTrend.filter(d => {
        const date = new Date(d.day);
        return (
          date.getMonth() === today.getMonth() &&
          date.getFullYear() === today.getFullYear()
        );
      });
    }

    setData(filteredData);
  }, [filter]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (!data) return <Loader />;

  return (
    <div className="card p-3 mb-4">
      <div className="d-flex justify-content-between align-items-center">
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
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesTrendChart;
