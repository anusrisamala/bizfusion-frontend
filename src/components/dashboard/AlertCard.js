import { useEffect, useState } from "react";
import { fetchDashboardData } from "../../services/mockApi";
import Loader from "../common/Loader";

function AlertCard() {
  const [alerts, setAlerts] = useState(null);

  useEffect(() => {
    fetchDashboardData().then((res) => {
      setAlerts(res.alerts);
    });
  }, []);

  if (!alerts) return <Loader />;

  return (
    <div className="card border-danger mt-4">
      <div className="card-header bg-danger text-white">
        AI Alerts
      </div>
      <div className="card-body">
        <ul className="mb-0">
          {alerts.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AlertCard;
