function IntegrationCard({ name, status }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="mb-2">{name}</h5>

          <p className="mb-3">
            Status:{" "}
            <span className={status ? "text-success" : "text-danger"}>
              {status ? "Connected" : "Not Connected"}
            </span>
          </p>

          <button
            className={`btn btn-sm ${
              status ? "btn-outline-danger" : "btn-outline-primary"
            }`}
          >
            {status ? "Disconnect" : "Connect"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntegrationCard;
