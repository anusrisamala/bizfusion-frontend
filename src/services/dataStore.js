
// // let analyticsData = {
// //   // Sales trend for last 30 days with real dates
// //   salesTrend: [
// //     { day: "2025-12-01", sales: 10000 },
// //     { day: "2025-12-02", sales: 12000 },
// //     { day: "2025-12-03", sales: 9000 },
// //     { day: "2025-12-04", sales: 15000 },
// //     { day: "2025-12-05", sales: 13000 },
// //     { day: "2025-12-06", sales: 17000 },
// //     { day: "2025-12-07", sales: 14000 },
// //     { day: "2025-12-08", sales: 16000 },
// //     { day: "2025-12-09", sales: 12500 },
// //     { day: "2025-12-10", sales: 13500 },
// //     { day: "2025-12-11", sales: 14500 },
// //     { day: "2025-12-12", sales: 15500 },
// //     { day: "2025-12-13", sales: 16500 },
// //     { day: "2025-12-14", sales: 17500 },
// //     { day: "2025-12-15", sales: 18500 },
// //     { day: "2025-12-16", sales: 19500 },
// //     { day: "2025-12-17", sales: 20500 },
// //     { day: "2025-12-18", sales: 21500 },
// //     { day: "2025-12-19", sales: 22500 },
// //     { day: "2025-12-20", sales: 23500 },
// //     { day: "2025-12-21", sales: 24500 },
// //     { day: "2025-12-22", sales: 25500 },
// //     { day: "2025-12-23", sales: 26500 },
// //     { day: "2025-12-24", sales: 27500 },
// //     { day: "2025-12-25", sales: 28500 },
// //     { day: "2025-12-26", sales: 29500 },
// //     { day: "2025-12-27", sales: 30500 },
// //     { day: "2025-12-28", sales: 31500 },
// //     { day: "2025-12-29", sales: 32500 },
// //     { day: "2025-12-30", sales: 33500 },
// //   ],

// //   // Monthly sales overview
// //   monthlySales: [
// //     { name: "Jan", sales: 50000 },
// //     { name: "Feb", sales: 62000 },
// //     { name: "Mar", sales: 75000 },
// //     { name: "Apr", sales: 68000 },
// //     { name: "May", sales: 72000 },
// //     { name: "Jun", sales: 81000 },
// //   ],

// //   // Product performance with DATE (used for filtering products)
// //   products: [
// //     { name: "Product A", sales: 85000, status: "Good", date: "2025-12-18" },
// //     { name: "Product B", sales: 32000, status: "Poor", date: "2025-12-10" },
// //     { name: "Product C", sales: 46000, status: "Good", date: "2025-12-05" },
// //     { name: "Product D", sales: 29000, status: "Poor", date: "2025-11-28" },
// //     { name: "Product E", sales: 51000, status: "Good", date: "2025-11-20" },
// //   ],
// // };

// // // Dashboard summary data
// // const dashboardData = {
// //   sales: "₹1,25,000",
// //   profit: "₹32,000",
// //   orders: 184,
// //   lowStock: 6,
// //   alerts: [
// //     "Low stock on Product B",
// //     "Cash flow risk next week",
// //     "Product D underperforming",
// //   ],
// // };

// // // 🔹 Dashboard fetch
// // export function fetchDashboardData() {
// //   return Promise.resolve(dashboardData);
// // }

// // // 🔹 Analytics data access
// // export function getAnalyticsData() {
// //   return analyticsData;
// // }

// // // 🔹 Update analytics dynamically
// // export function updateAnalyticsData(newData) {
// //   analyticsData = { ...analyticsData, ...newData };
// // }
// // dataStore.js - dynamic simulation

// function generateSalesTrend(days = 30) {
//   const result = [];
//   const today = new Date();
//   for (let i = days - 1; i >= 0; i--) {
//     const date = new Date(today);
//     date.setDate(today.getDate() - i);
//     const sales = 10000 + Math.floor(Math.random() * 20000); // random sales
//     result.push({ day: date.toISOString().slice(0, 10), sales });
//   }
//   return result;
// }

// function generateProducts() {
//   const products = [
//     "Product A",
//     "Product B",
//     "Product C",
//     "Product D",
//     "Product E",
//   ];
//   return products.map((name) => {
//     const sales = 30000 + Math.floor(Math.random() * 60000);
//     const status = sales > 50000 ? "Good" : "Poor";
//     const date = new Date();
//     date.setDate(date.getDate() - Math.floor(Math.random() * 30)); // random past 30 days
//     return { name, sales, status, date: date.toISOString().slice(0, 10) };
//   });
// }

// let analyticsData = {
//   salesTrend: generateSalesTrend(30),
//   monthlySales: [
//     { name: "Jan", sales: 50000 },
//     { name: "Feb", sales: 62000 },
//     { name: "Mar", sales: 75000 },
//     { name: "Apr", sales: 68000 },
//     { name: "May", sales: 72000 },
//     { name: "Jun", sales: 81000 },
//   ],
//   products: generateProducts(),
// };

// const dashboardData = {
//   sales: "₹" + (100000 + Math.floor(Math.random() * 50000)),
//   profit: "₹" + (30000 + Math.floor(Math.random() * 20000)),
//   orders: 150 + Math.floor(Math.random() * 50),
//   lowStock: Math.floor(Math.random() * 10),
//   alerts: [
//     "Low stock on Product B",
//     "Cash flow risk next week",
//     "Product D underperforming",
//   ],
// };

// // Fetch dashboard data
// export function fetchDashboardData() {
//   // regenerate some dynamic values
//   dashboardData.sales = "₹" + (100000 + Math.floor(Math.random() * 50000));
//   dashboardData.profit = "₹" + (30000 + Math.floor(Math.random() * 20000));
//   dashboardData.orders = 150 + Math.floor(Math.random() * 50);
//   dashboardData.lowStock = Math.floor(Math.random() * 10);
//   return Promise.resolve(dashboardData);
// }

// // Fetch analytics data
// export function getAnalyticsData() {
//   // regenerate dynamic salesTrend and products each time called
//   analyticsData.salesTrend = generateSalesTrend(30);
//   analyticsData.products = generateProducts();
//   return analyticsData;
// }

// // AI update (simulate real-time change)
// export function updateAnalyticsData(newData) {
//   analyticsData = { ...analyticsData, ...newData };
// }
// dataStore.js - central intelligence layer (dynamic simulation)

// Generate salesTrend for last N days
// function generateSalesTrend(days = 30) {
//   const result = [];
//   const today = new Date();
//   for (let i = days - 1; i >= 0; i--) {
//     const date = new Date(today);
//     date.setDate(today.getDate() - i);
//     const sales = 10000 + Math.floor(Math.random() * 20000); // random sales
//     result.push({ day: date.toISOString().slice(0, 10), sales });
//   }
//   return result;
// }

// // Generate products dynamically
// function generateProducts() {
//   const products = ["Product A", "Product B", "Product C", "Product D", "Product E"];
//   return products.map((name) => {
//     const sales = 30000 + Math.floor(Math.random() * 60000);
//     const status = sales > 50000 ? "Good" : "Poor";
//     const date = new Date();
//     date.setDate(date.getDate() - Math.floor(Math.random() * 30)); // past 30 days
//     return { name, sales, status, date: date.toISOString().slice(0, 10) };
//   });
// }

// // Main dynamic data
// let analyticsData = {
//   salesTrend: generateSalesTrend(30),
//   monthlySales: [
//     { name: "Jan", sales: 50000 },
//     { name: "Feb", sales: 62000 },
//     { name: "Mar", sales: 75000 },
//     { name: "Apr", sales: 68000 },
//     { name: "May", sales: 72000 },
//     { name: "Jun", sales: 81000 },
//   ],
//   products: generateProducts(),
// };

// // Dashboard data
// const dashboardData = {
//   sales: "₹" + (100000 + Math.floor(Math.random() * 50000)),
//   profit: "₹" + (30000 + Math.floor(Math.random() * 20000)),
//   orders: 150 + Math.floor(Math.random() * 50),
//   lowStock: Math.floor(Math.random() * 10),
//   alerts: [], // dynamic alerts generated below
// };

// // 🔹 Fetch dashboard
// export function fetchDashboardData() {
//   dashboardData.sales = "₹" + (100000 + Math.floor(Math.random() * 50000));
//   dashboardData.profit = "₹" + (30000 + Math.floor(Math.random() * 20000));
//   dashboardData.orders = 150 + Math.floor(Math.random() * 50);
//   dashboardData.lowStock = Math.floor(Math.random() * 10);
//   return Promise.resolve(dashboardData);
// }

// // 🔹 Fetch analytics
// export function getAnalyticsData() {
//   analyticsData.salesTrend = generateSalesTrend(30);
//   analyticsData.products = generateProducts();
//   return analyticsData;
// }

// // 🔹 Update analytics (if needed)
// export function updateAnalyticsData(newData) {
//   analyticsData = { ...analyticsData, ...newData };
// }

// // 🔹 Generate AI alerts dynamically
// export function generateAlerts() {
//   const data = getAnalyticsData();
//   const alerts = [];

//   // Product performance alerts
//   data.products.forEach(p => {
//     if (p.sales < 40000) alerts.push(`${p.name} underperforming`);
//   });

//   // Low stock alert simulation
//   const lowStockCount = Math.floor(Math.random() * 10);
//   if (lowStockCount > 5) {
//     const product = data.products[Math.floor(Math.random() * data.products.length)].name;
//     alerts.push(`Low stock on ${product}`);
//   }

//   // Cash flow alert randomly
//   if (Math.random() < 0.3) alerts.push("Cash flow risk next week");

//   return alerts;
// }
// ===============================
// BizFusion Central Data Store
// ===============================

// ---------- INTERNAL STATE ----------
let lastDashboardData = {
  sales: 100000,
  profit: 30000,
  orders: 150,
  lowStock: 5,
};

// ---------- HELPERS ----------
function randomChange(range) {
  return Math.floor(Math.random() * range * 2 - range);
}

// ---------- ANALYTICS DATA ----------
let analyticsData = {
  salesTrend: [],
  products: [],
  monthlySales: [
    { name: "Jan", sales: 50000 },
    { name: "Feb", sales: 62000 },
    { name: "Mar", sales: 75000 },
    { name: "Apr", sales: 68000 },
    { name: "May", sales: 72000 },
    { name: "Jun", sales: 81000 },
  ],
};

// Generate sales trend (last N days)
function generateSalesTrend(days = 30) {
  const result = [];
  const today = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    result.push({
      day: date.toISOString().slice(0, 10),
      sales: 8000 + Math.floor(Math.random() * 20000),
    });
  }
  return result;
}

// Generate products
function generateProducts() {
  const names = ["Product A", "Product B", "Product C", "Product D", "Product E"];

  return names.map((name) => {
    const sales = 30000 + Math.floor(Math.random() * 60000);
    return {
      name,
      sales,
      status: sales > 50000 ? "Good" : "Poor",
    };
  });
}

// ---------- ALERT ENGINE ----------
function generateAlerts(data) {
  const alerts = [];

  if (data.sales < 90000) {
    alerts.push("📉 Sales dropped below expected threshold");
  }

  if (data.profit < 25000) {
    alerts.push("💸 Profit margin shrinking");
  }

  if (data.lowStock > 7) {
    alerts.push("⚠️ Multiple products running low on stock");
  }

  return alerts;
}

// ---------- DASHBOARD ----------
export function fetchDashboardData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastDashboardData = {
        sales: lastDashboardData.sales + randomChange(8000),
        profit: lastDashboardData.profit + randomChange(5000),
        orders: lastDashboardData.orders + randomChange(30),
        lowStock: Math.max(0, lastDashboardData.lowStock + randomChange(3)),
      };

      resolve({
        ...lastDashboardData,
        alerts: generateAlerts(lastDashboardData),
      });
    }, 500);
  });
}

// ---------- ANALYTICS ----------
export function getAnalyticsData() {
  analyticsData.salesTrend = generateSalesTrend(30);
  analyticsData.products = generateProducts();
  return analyticsData;
}
