// dataStore.js - central dynamic data store

let analyticsData = {
  salesTrend: [
    { day: "Mon", sales: 10000 },
    { day: "Tue", sales: 12000 },
    { day: "Wed", sales: 9000 },
    { day: "Thu", sales: 15000 },
    { day: "Fri", sales: 13000 },
    { day: "Sat", sales: 17000 },
    { day: "Sun", sales: 14000 },
  ],
  monthlySales: [
    { name: "Jan", sales: 50000 },
    { name: "Feb", sales: 62000 },
    { name: "Mar", sales: 75000 },
    { name: "Apr", sales: 68000 },
    { name: "May", sales: 72000 },
    { name: "Jun", sales: 81000 },
  ],
  products: [
    { name: "Product A", sales: 85000, status: "Good" },
    { name: "Product B", sales: 32000, status: "Poor" },
    { name: "Product C", sales: 46000, status: "Good" },
    { name: "Product D", sales: 29000, status: "Poor" },
    { name: "Product E", sales: 51000, status: "Good" },
  ],
};

export const getAnalyticsData = () => analyticsData;

export const updateAnalyticsData = (newData) => {
  analyticsData = { ...analyticsData, ...newData };
};
