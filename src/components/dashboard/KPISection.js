// import { useEffect, useState } from "react";
// import KPIBox from "./KPIBox";
// import { fetchDashboardData } from "../../services/dataStore";
// import Loader from "../common/Loader";

// function KPISection() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchDashboardData().then((res) => {
//       setData(res);
//     });
//   }, []);

//   if (!data) return <Loader />;

//   return (
//     <div className="row">
//       <KPIBox title="Total Sales" value={data.sales} color="primary" />
//       <KPIBox title="Profit" value={data.profit} color="success" />
//       <KPIBox title="Orders" value={data.orders} color="warning" />
//       <KPIBox title="Low Stock Items" value={data.lowStock} color="danger" />
//     </div>
//   );
// }

// export default KPISection;
// import { useEffect, useState, useRef } from "react";
// import KPIBox from "./KPIBox";
// import { fetchDashboardData } from "../../services/dataStore";
// import Loader from "../common/Loader";

// function KPISection() {
//   const [data, setData] = useState(null);
//   const prevDataRef = useRef(null);

//   useEffect(() => {
//     const loadData = async () => {
//       const res = await fetchDashboardData();
//       prevDataRef.current = data; // store previous
//       setData(res);
//     };

//     loadData(); // initial load
//     const interval = setInterval(loadData, 10000); // every 10 sec

//     return () => clearInterval(interval);
//   }, [data]);

//   if (!data) return <Loader />;

//   return (
//     <div className="row">
//       <KPIBox
//         title="Total Sales"
//         value={data.sales}
//         prevValue={prevDataRef.current?.sales}
//         color="primary"
//       />
//       <KPIBox
//         title="Profit"
//         value={data.profit}
//         prevValue={prevDataRef.current?.profit}
//         color="success"
//       />
//       <KPIBox
//         title="Orders"
//         value={data.orders}
//         prevValue={prevDataRef.current?.orders}
//         color="warning"
//       />
//       <KPIBox
//         title="Low Stock Items"
//         value={data.lowStock}
//         prevValue={prevDataRef.current?.lowStock}
//         color="danger"
//         inverse // lower is better
//       />
//     </div>
//   );
// }

// export default KPISection;
import { useEffect, useState, useRef } from "react";
import KPIBox from "./KPIBox";
import { fetchDashboardData } from "../../services/dataStore";
import Loader from "../common/Loader";

function KPISection() {
  const [data, setData] = useState(null);
  const prevDataRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetchDashboardData();

      // store previous snapshot
      prevDataRef.current = data;
      setData(res);
    };

    loadData(); // initial fetch

    const interval = setInterval(loadData, 10000); // every 10 seconds

    return () => clearInterval(interval);
  }, []); // ✅ RUN ONLY ONCE

  if (!data) return <Loader />;

  return (
    <div className="row">
      <KPIBox
        title="Total Sales"
        value={data.sales}
        prevValue={prevDataRef.current?.sales}
        color="primary"
      />

      <KPIBox
        title="Profit"
        value={data.profit}
        prevValue={prevDataRef.current?.profit}
        color="success"
      />

      <KPIBox
        title="Orders"
        value={data.orders}
        prevValue={prevDataRef.current?.orders}
        color="warning"
      />

      <KPIBox
        title="Low Stock Items"
        value={data.lowStock}
        prevValue={prevDataRef.current?.lowStock}
        color="danger"
        inverse // lower is better
      />
    </div>
  );
}

export default KPISection;
