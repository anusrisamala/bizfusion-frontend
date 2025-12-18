function RiskList() {
  return (
    <div className="card p-3">
      <h5>Detected Business Risks</h5>
      <ul className="mt-3">
        <li>Inventory for Product B may finish in 4 days</li>
        <li>Cash inflow expected to drop next month</li>
        <li>Unusual sales spike detected on Wednesday</li>
      </ul>
    </div>
  );
}

export default RiskList;
