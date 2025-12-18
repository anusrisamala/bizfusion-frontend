import { useEffect, useState } from "react";
import KPIBox from "./KPIBox";
import { fetchDashboardData } from "../../services/mockApi";
import Loader from "../common/Loader";

function KPISection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDashboardData().then((res) => {
      setData(res);
    });
  }, []);

  if (!data) return <Loader />;

  return (
    <div className="row">
      <KPIBox title="Total Sales" value={data.sales} color="primary" />
      <KPIBox title="Profit" value={data.profit} color="success" />
      <KPIBox title="Orders" value={data.orders} color="warning" />
      <KPIBox title="Low Stock Items" value={data.lowStock} color="danger" />
    </div>
  );
}

export default KPISection;
