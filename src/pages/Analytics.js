import MainLayout from "../layout/MainLayout";
import FilterBar from "../components/analytics/FilterBar";
import SalesTrendChart from "../components/analytics/SalesTrendChart";
import ProductPerformance from "../components/analytics/ProductPerformance";

function Analytics() {
  return (
    <MainLayout>
      <h2 className="mb-4">Analytics & Reports</h2>

      <FilterBar />

      <SalesTrendChart />

      <ProductPerformance />
    </MainLayout>
  );
}

export default Analytics;
