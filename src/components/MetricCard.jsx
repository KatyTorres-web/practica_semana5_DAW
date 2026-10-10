import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MetricCard({ title, value, icon, tone, children }) {
  return (
    <article className={`metric-card ${tone}`}>
      <div className="metric-card-header">
        <span className="metric-icon">
          <FontAwesomeIcon icon={icon} />
        </span>

        <span className="metric-label">{title}</span>
      </div>

      <p className="metric-value">{value}</p>

      <div className="metric-details">{children}</div>
    </article>
  );
}

export default MetricCard;
