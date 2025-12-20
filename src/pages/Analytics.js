
// // export default Analytics;
// import { useAnalytics } from "../context/AnalyticsContext";
// import FilterBar from "../components/analytics/FilterBar";
// import SalesTrendChart from "../components/analytics/SalesTrendChart";
// import ProductPerformance from "../components/analytics/ProductPerformance";
// import MainLayout from "../layout/MainLayout";

// function Analytics() {
//   const { highlightChart } = useAnalytics();

//   return (
//     <MainLayout>
//       <h3 className="mb-4">Analytics</h3>

//       <FilterBar />

//       <div className={`mb-4 ${highlightChart === "salesTrend" ? "border border-warning border-3 p-2" : ""}`}>
//         <SalesTrendChart />
//       </div>

//       <div className={`mb-4 ${highlightChart === "productPerformance" ? "border border-warning border-3 p-2" : ""}`}>
//         <ProductPerformance />
//       </div>
//     </MainLayout>
//   );
// }

// export default Analytics;

// import { useEffect } from "react";
// import { useAnalytics } from "../context/AnalyticsContext";
// import FilterBar from "../components/analytics/FilterBar";
// import SalesTrendChart from "../components/analytics/SalesTrendChart";
// import ProductPerformance from "../components/analytics/ProductPerformance";
// import MainLayout from "../layout/MainLayout";
// import { getAnalyticsData } from "../services/dataStore";

// function Analytics() {
//   const { highlightChart } = useAnalytics();

//   // Auto-refresh dynamic data every 10 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       getAnalyticsData(); // regenerate dynamic sales and product data
//     }, 10000); // every 10 seconds

//     return () => clearInterval(interval); // cleanup on unmount
//   }, []);

//   return (
//     <MainLayout>
//       <h3 className="mb-4">Analytics</h3>

//       {/* Filter bar */}
//       <FilterBar />

//       {/* Sales Trend Chart */}
//       <div
//         className={`mb-4 p-3 card ${
//           highlightChart === "salesTrend" ? "border border-warning border-3" : ""
//         }`}
//       >
//         <SalesTrendChart />
//       </div>

//       {/* Product Performance Table */}
//       <div
//         className={`mb-4 p-3 card ${
//           highlightChart === "productPerformance" ? "border border-warning border-3" : ""
//         }`}
//       >
//         <ProductPerformance />
//       </div>
//     </MainLayout>
//   );
// }

// export default Analytics;
// Analytics.js
// import { useEffect, useState } from "react";
// import { useAnalytics } from "../context/AnalyticsContext";
// import FilterBar from "../components/analytics/FilterBar";
// import SalesTrendChart from "../components/analytics/SalesTrendChart";
// import ProductPerformance from "../components/analytics/ProductPerformance";
// import MainLayout from "../layout/MainLayout";
// import { getAnalyticsData, generateAlerts } from "../services/dataStore";

// function Analytics() {
//   const { highlightChart, setHighlightChart } = useAnalytics();
//   const [alerts, setAlerts] = useState([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const data = getAnalyticsData();
//       const newAlerts = generateAlerts();
//       setAlerts(newAlerts);

//       const sales = data.salesTrend;
//       if (sales[sales.length - 1].sales < sales[sales.length - 2].sales) {
//         setHighlightChart("salesTrend");
//       } else {
//         setHighlightChart("");
//       }
//     }, 10000);

//     return () => clearInterval(interval);
//   }, [setHighlightChart]);

//   return (
//     <MainLayout>
//       <h3 className="mb-4">Analytics</h3>

//       <FilterBar />

//       <div className="mb-3">
//         <h6>AI Alerts:</h6>
//         {alerts.length === 0 ? (
//           <p>No alerts</p>
//         ) : (
//           <ul>
//             {alerts.map((alert, i) => (
//               <li key={i} className="text-warning">{alert}</li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <div className={`mb-4 p-3 card ${highlightChart === "salesTrend" ? "border border-warning border-3" : ""}`}>
//         <SalesTrendChart />
//       </div>

//       <div className={`mb-4 p-3 card ${highlightChart === "productPerformance" ? "border border-warning border-3" : ""}`}>
//         <ProductPerformance />
//       </div>
//     </MainLayout>
//   );
// }

// // ✅ This is important
// export default Analytics;
import { useEffect } from "react";
import { useAnalytics } from "../context/AnalyticsContext";
import FilterBar from "../components/analytics/FilterBar";
import SalesTrendChart from "../components/analytics/SalesTrendChart";
import ProductPerformance from "../components/analytics/ProductPerformance";
import MainLayout from "../layout/MainLayout";
import { getAnalyticsData } from "../services/dataStore";

function Analytics() {
  const { highlightChart, setHighlightChart } = useAnalytics();

  useEffect(() => {
    const interval = setInterval(() => {
      const data = getAnalyticsData();
      const sales = data.salesTrend;

      if (
        sales.length > 1 &&
        sales[sales.length - 1].sales < sales[sales.length - 2].sales
      ) {
        setHighlightChart("salesTrend");
      } else {
        setHighlightChart("");
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [setHighlightChart]);

  return (
    <MainLayout>
      <h3 className="mb-4">Analytics</h3>

      <FilterBar />

      <div
        className={`mb-4 p-3 card ${
          highlightChart === "salesTrend"
            ? "border border-warning border-3"
            : ""
        }`}
      >
        <SalesTrendChart />
      </div>

      <div
        className={`mb-4 p-3 card ${
          highlightChart === "productPerformance"
            ? "border border-warning border-3"
            : ""
        }`}
      >
        <ProductPerformance />
      </div>
    </MainLayout>
  );
}

export default Analytics;
