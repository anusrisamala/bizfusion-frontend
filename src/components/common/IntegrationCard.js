function IntegrationCard({ name, status }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <div className="card-body">
          <h5>{name}</h5>
          <p>
            Status:{" "}
            <span className={status ? "text-success" : "text-danger"}>
              {status ? "Connected" : "Not Connected"}
            </span>
          </p>
          <button className="btn btn-outline-primary btn-sm">
            {status ? "Disconnect" : "Connect"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntegrationCard;
