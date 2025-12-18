import MainLayout from "../layout/MainLayout";
import KPISection from "../components/dashboard/KPISection";
import AlertCard from "../components/dashboard/AlertCard";

function Dashboard() {
  return (
    <MainLayout>
      <h2 className="mb-4">Dashboard Overview</h2>

      <KPISection />

      <AlertCard />
    </MainLayout>
  );
}

export default Dashboard;
