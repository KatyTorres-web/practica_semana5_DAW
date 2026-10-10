import MetricCard from "./MetricCard";

import {
  faSeedling,
  faClipboardList,
  faHeart,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Organiza y presenta las métricas principales de la florería.
 *
 * @returns {JSX.Element} Panel principal del dashboard.
 */
function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <span className="dashboard-eyebrow">
            <i className="fa-solid fa-leaf" aria-hidden="true" /> PETAL & BLOOM
          </span>

          <h1>Un jardín de buenos momentos</h1>

          <p>
            Administra tu florería con amor, creatividad y un toque de
            naturaleza.
          </p>
        </div>

        <div className="dashboard-decoration" aria-hidden="true">
          <span>✿</span>
          <span>❀</span>
          <span>✿</span>
        </div>
      </header>

      <section className="dashboard-section">
        <div className="section-heading">
          <div>
            <h2>Resumen de tu florería</h2>
            <p>Así florece tu negocio hoy.</p>
          </div>
        </div>

        <div className="metric-grid">
          <MetricCard
            title="Variedades"
            value="128"
            icon={faSeedling}
            tone="tone-sage"
          >
            <span className="metric-note">Flores y plantas registradas</span>
          </MetricCard>

          <MetricCard
            title="Pedidos"
            value="36"
            icon={faClipboardList}
            tone="tone-lavender"
          >
            <span className="metric-note">Pedidos recibidos esta semana</span>
          </MetricCard>

          <MetricCard
            title="Clientes"
            value="94"
            icon={faHeart}
            tone="tone-rose"
          >
            <span className="metric-note">
              Personas que confían en nosotros
            </span>
          </MetricCard>

          <MetricCard
            title="Entregas"
            value="12"
            icon={faTruck}
            tone="tone-peach"
          >
            <span className="metric-note">Entregas pendientes de hoy</span>
          </MetricCard>
        </div>
      </section>

      <section className="welcome-note">
        <span className="welcome-flower" aria-hidden="true">
          ✿
        </span>

        <div>
          <h2>Cada flor cuenta una historia</h2>
          <p>
            Cuida cada detalle y convierte los pequeños momentos en recuerdos
            inolvidables.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
