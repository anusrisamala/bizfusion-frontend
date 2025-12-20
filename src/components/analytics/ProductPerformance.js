

// // export default ProductPerformance;
// import { useEffect, useState } from "react";
// import { getAnalyticsData } from "../../services/dataStore";
// import Loader from "../common/Loader";
// import { useAnalytics } from "../../context/AnalyticsContext";

// function ProductPerformance() {
//   const { filter } = useAnalytics();
//   const [products, setProducts] = useState(null);

//   useEffect(() => {
//     const allData = getAnalyticsData();

//     let filteredProducts = allData.products;
//     if (filter === "7") filteredProducts = allData.products.slice(0, allData.products.length);
//     if (filter === "30") filteredProducts = allData.products.slice(0, allData.products.length);
//     if (filter === "month") filteredProducts = allData.products.slice(0, allData.products.length);

//     setProducts(filteredProducts);
//   }, [filter]);

//   if (!products) return <Loader />;

//   return (
//     <div className="card p-3">
//       <h5>Product Performance</h5>
//       <table className="table table-striped mt-3">
//         <thead>
//           <tr>
//             <th>Product</th>
//             <th>Sales</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((p, i) => (
//             <tr key={i}>
//               <td>{p.name}</td>
//               <td>{p.sales}</td>
//               <td className={p.status === "Good" ? "text-success" : "text-danger"}>{p.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ProductPerformance;
// import { useEffect, useState } from "react";
// import Loader from "../common/Loader";
// import { getAnalyticsData } from "../../services/dataStore";
// import { useAnalytics } from "../../context/AnalyticsContext";

// function ProductPerformance() {
//   const { filter } = useAnalytics();
//   const [products, setProducts] = useState(null);

//   useEffect(() => {
//     const allData = getAnalyticsData();
//     let filteredProducts = allData.products;

//     // Extend filter logic if needed
//     if (filter === "7") filteredProducts = allData.products.slice(0, allData.products.length);
//     if (filter === "30") filteredProducts = allData.products.slice(0, allData.products.length);
//     if (filter === "month") filteredProducts = allData.products.slice(0, allData.products.length);

//     setProducts(filteredProducts);
//   }, [filter]);

//   if (!products) return <Loader />;

//   return (
//     <div className="card p-3">
//       <h5>Product Performance</h5>
//       <table className="table table-striped mt-3">
//         <thead>
//           <tr>
//             <th>Product</th>
//             <th>Sales</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((p, i) => (
//             <tr key={i}>
//               <td>{p.name}</td>
//               <td>{p.sales}</td>
//               <td className={p.status === "Good" ? "text-success" : "text-danger"}>{p.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ProductPerformance;

import { useEffect, useState } from "react";
import Loader from "../common/Loader";
import { getAnalyticsData } from "../../services/dataStore";
import { useAnalytics } from "../../context/AnalyticsContext";

function ProductPerformance() {
  const { filter } = useAnalytics();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const allData = getAnalyticsData();
    const today = new Date();

    const filteredProducts = allData.products.filter((p) => {
      const productDate = new Date(p.date);
      const diffDays = (today - productDate) / (1000 * 60 * 60 * 24);

      if (filter === "7") return diffDays <= 7;
      if (filter === "30") return diffDays <= 30;
      if (filter === "month") {
        return (
          productDate.getMonth() === today.getMonth() &&
          productDate.getFullYear() === today.getFullYear()
        );
      }
      return true;
    });

    setProducts(filteredProducts);
  }, [filter]);

  if (!products) return <Loader />;

  return (
    <div className="card p-3">
      <h5>Product Performance</h5>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Product</th>
            <th>Sales</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.sales}</td>
              <td className={p.status === "Good" ? "text-success" : "text-danger"}>
                {p.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductPerformance;
