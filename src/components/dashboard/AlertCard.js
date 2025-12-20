// import { useEffect, useState } from "react";
// import { fetchDashboardData } from "../../services/dataStore";
// import Loader from "../common/Loader";

// function AlertCard() {
//   const [alerts, setAlerts] = useState(null);

//   useEffect(() => {
//     fetchDashboardData().then((res) => {
//       setAlerts(res.alerts);
//     });
//   }, []);

//   if (!alerts) return <Loader />;

//   return (
//     <div className="card border-danger mt-4">
//       <div className="card-header bg-danger text-white">
//         AI Alerts
//       </div>
//       <div className="card-body">
//         <ul className="mb-0">
//           {alerts.map((alert, index) => (
//             <li key={index}>{alert}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default AlertCard;
// import { useEffect, useState } from "react";
// import { fetchDashboardData } from "../../services/dataStore";
// import Loader from "../common/Loader";

// function AlertCard() {
//   const [alerts, setAlerts] = useState(null);

//   useEffect(() => {
//     const loadAlerts = async () => {
//       const res = await fetchDashboardData();
//       setAlerts(res.alerts);
//     };

//     loadAlerts();
//     const interval = setInterval(loadAlerts, 10000); // every 10 sec

//     return () => clearInterval(interval);
//   }, []);

//   if (!alerts) return <Loader />;

//   return (
//     <div className="card border-danger mt-4">
//       <div className="card-header bg-danger text-white">
//         AI Alerts
//       </div>
//       <div className="card-body">
//         <ul className="mb-0">
//           {alerts.map((alert, index) => (
//             <li key={index}>{alert}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default AlertCard;
import { useEffect, useState } from "react";
import { fetchDashboardData } from "../../services/dataStore";
import Loader from "../common/Loader";

function AlertCard() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAlerts = async () => {
      const res = await fetchDashboardData();
      setAlerts(res.alerts || []);
      setLoading(false);
    };

    loadAlerts(); // initial load

    const interval = setInterval(loadAlerts, 10000); // auto refresh every 10s
    return () => clearInterval(interval);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="card border-danger mt-4">
      <div className="card-header bg-danger text-white">
        🤖 AI Alerts
      </div>

      <div className="card-body">
        {alerts.length === 0 ? (
          <p className="text-muted mb-0">All systems stable 🚀</p>
        ) : (
          <ul className="mb-0">
            {alerts.map((alert, index) => (
              <li key={index} className="text-danger">
                {alert}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AlertCard;
