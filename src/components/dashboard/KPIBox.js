function KPIBox({ title, value, icon, color }) {
  return (
    <div className="col-md-3 mb-3">
      <div className={`card text-white bg-${color} h-100`}>
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <h3>{value}</h3>
          <small>{icon}</small>
        </div>
      </div>
    </div>
  );
}

export default KPIBox;
