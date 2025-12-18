import { useEffect, useState } from "react";
import { fetchAnalyticsData } from "../../services/mockApi";
import Loader from "../common/Loader";

function ProductPerformance() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchAnalyticsData().then((res) => {
      setProducts(res.products);
    });
  }, []);

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
              <td
                className={
                  p.status === "Good" ? "text-success" : "text-danger"
                }
              >
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
