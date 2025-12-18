import MainLayout from "../layout/MainLayout";
import IntegrationCard from "../components/common/IntegrationCard";

function Settings() {
  return (
    <MainLayout>
      <h2 className="mb-4">System Integrations</h2>

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
