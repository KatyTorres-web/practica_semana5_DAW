import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/MetricCard.module.css";

function MetricCard({ title, value, icon, tone, children }) {
  const toneClass = {
    sage: styles.toneSage,
    lavender: styles.toneLavender,
    rose: styles.toneRose,
    peach: styles.tonePeach,
  }[tone];

  return (
    <article className={`${styles.metricCard} ${toneClass}`}>
      <div className={styles.metricCardHeader}>
        <span className={styles.metricIcon}>
          <FontAwesomeIcon icon={icon} aria-hidden="true" />
        </span>

        <span className={styles.metricLabel}>{title}</span>
      </div>

      <p className={styles.metricValue}>{value}</p>

      <div className={styles.metricDetails}>{children}</div>
    </article>
  );
}

export default MetricCard;
