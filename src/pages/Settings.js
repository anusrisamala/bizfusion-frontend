import MainLayout from "../layout/MainLayout";
import IntegrationCard from "../components/common/IntegrationCard";
import { useAnalytics } from "../context/AnalyticsContext";

function Settings() {
  const { darkMode, setDarkMode } = useAnalytics();

  return (
    <MainLayout>
      <h2 className="mb-4">Settings</h2>

      {/* Appearance */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="mb-3">Appearance</h5>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <label className="form-check-label">
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>

      {/* Integrations */}
      <h4 className="mb-3">System Integrations</h4>
      <div className="row">
        <IntegrationCard name="CRM System" status={true} />
        <IntegrationCard name="ERP System" status={false} />
        <IntegrationCard name="Inventory Management" status={true} />
        <IntegrationCard name="Accounting Software" status={false} />
        <IntegrationCard name="E-Commerce Platform" status={true} />
      </div>
    </MainLayout>
  );
}

export default Settings;
