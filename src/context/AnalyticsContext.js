// import { createContext, useContext, useState, useEffect } from "react";

// const AnalyticsContext = createContext();

// export const AnalyticsProvider = ({ children }) => {
//   const [filter, setFilter] = useState("7");
//   const [highlightChart, setHighlightChart] = useState("");
//   const [darkMode, setDarkMode] = useState(false);

//   // apply theme to body
//   useEffect(() => {
//     document.body.className = darkMode ? "bg-dark text-light" : "";
//   }, [darkMode]);

//   return (
//     <AnalyticsContext.Provider
//       value={{
//         filter,
//         setFilter,
//         highlightChart,
//         setHighlightChart,
//         darkMode,
//         setDarkMode
//       }}
//     >
//       {children}
//     </AnalyticsContext.Provider>
//   );
// };

// export const useAnalytics = () => useContext(AnalyticsContext);
import { createContext, useContext, useEffect, useState } from "react";
import { fetchDashboardData } from "../services/dataStore";

const AnalyticsContext = createContext();

export const AnalyticsProvider = ({ children }) => {
  const [filter, setFilter] = useState("7");
  const [highlightChart, setHighlightChart] = useState("");
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchDashboardData();
      setDashboardData(data);
    };

    loadData(); // initial load

    const interval = setInterval(loadData, 10000); // refresh every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <AnalyticsContext.Provider
      value={{
        filter,
        setFilter,
        highlightChart,
        setHighlightChart,
        dashboardData
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => useContext(AnalyticsContext);
