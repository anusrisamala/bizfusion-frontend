import MainLayout from "../layout/MainLayout";
import InsightCard from "../components/insights/InsightCard";
import RiskList from "../components/insights/RiskList";

function Insights() {
  return (
    <MainLayout>
      <h2 className="mb-4">AI Insights</h2>

      <InsightCard
        title="Inventory Prediction"
        message="Product A is likely to go out of stock in 3 days."
        type="warning"
      />

      <InsightCard
        title="Sales Trend Alert"
        message="Sales dropped by 10% compared to last week."
        type="danger"
      />

      <InsightCard
        title="Cash Flow Forecast"
        message="Cash flow is expected to remain stable this month."
        type="info"
      />

      <RiskList />
    </MainLayout>
  );
}

export default Insights;
