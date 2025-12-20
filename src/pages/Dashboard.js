import MainLayout from "../layout/MainLayout";
import KPISection from "../components/dashboard/KPISection";
import AlertCard from "../components/dashboard/AlertCard";
import SaleChart from "../components/dashboard/SalesChart"; // NEW

function Dashboard() {
  return (
    <MainLayout>
      <h2 className="mb-4">Dashboard Overview</h2>

      {/* KPI cards */}
      <KPISection />

      {/* Dynamic sales trend chart */}
      <SaleChart />

      {/* AI alerts */}
      <AlertCard />
    </MainLayout>
  );
}

export default Dashboard;
