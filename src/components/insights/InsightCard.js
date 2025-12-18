function InsightCard({ title, message, type }) {
  return (
    <div className={`card border-${type} mb-3`}>
      <div className={`card-header bg-${type} text-white`}>
        {title}
      </div>
      <div className="card-body">
        <p className="mb-0">{message}</p>
      </div>
    </div>
  );
}

export default InsightCard;
