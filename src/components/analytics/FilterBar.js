function FilterBar() {
  return (
    <div className="card p-3 mb-4">
      <div className="row align-items-center">
        <div className="col-md-3">
          <select className="form-select">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Month</option>
          </select>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary">
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
