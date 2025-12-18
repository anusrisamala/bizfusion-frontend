// export const fetchDashboardData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         sales: "₹2,75,000",
//         profit: "₹62,000",
//         orders: "356",
//         lowStock: "4",
//         alerts: [
//           "Inventory for Product C is low",
//           "Sales increased 8% this week",
//         ],
//       });
//     }, 1500); // simulate network delay
//   });
// };
// export const fetchAnalyticsData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         salesTrend: [
//           { day: "Mon", sales: Math.floor(Math.random() * 20000) },
//           { day: "Tue", sales: Math.floor(Math.random() * 20000) },
//           { day: "Wed", sales: Math.floor(Math.random() * 20000) },
//           { day: "Thu", sales: Math.floor(Math.random() * 20000) },
//           { day: "Fri", sales: Math.floor(Math.random() * 20000) },
//         ],
//         products: [
//           { name: "Product A", sales: "₹85,000", status: "Good" },
//           { name: "Product B", sales: "₹32,000", status: "Poor" },
//         ],
//       });
//     }, 1500);
//   });
// };
// mockApi.js - static test data

// mockApi.js - keeps your components working

export const analyticsData = [
  { day: "Mon", sales: 10000 },
  { day: "Tue", sales: 12000 },
  { day: "Wed", sales: 9000 },
  { day: "Thu", sales: 15000 },
  { day: "Fri", sales: 13000 },
];

export const productsData = [
  { name: "Product A", sales: 85000, status: "Good" },
  { name: "Product B", sales: 32000, status: "Poor" },
  { name: "Product C", sales: 46000, status: "Good" },
];

// Mock API functions (return Promises)
export const fetchAnalyticsData = async () => {
  return analyticsData;
};

export const fetchDashboardData = async () => {
  return {
    kpis: {
      totalSales: analyticsData.reduce((sum, item) => sum + item.sales, 0),
      totalProducts: productsData.length,
      lowStock: productsData.filter(p => p.status === "Poor").length,
    },
  };
};
