import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Dashboard.css";

export const Dashboard = () => {
    const { logout } = useAuth();

  return (
    <>
    <img src="../public/GAPsport_logo.png" alt="Logo GAPsport+" width={200}></img>
    <div className="dashboard">
      <header>
        <h2>Panel de administración</h2>

        <div>
          <Link to="/">
            Volver a la tienda
          </Link>
          <button onClick={logout}>
            Cerrar sesión
          </button>
        </div>
      </header>

      <section className="dashboard-actions">
        <h3>Acciones rápidas</h3>

        <div className="actions-grid">
          <button><Link to="/admin/products/new" className="action-card">➕ Cargar</Link></button>

          <button><Link to="#" className="action-card disabled">✏️ Modificar</Link></button>

          <button><Link to="#" className="action-card disabled">🗑️ Eliminar</Link></button>
        </div>
      </section>

      <section className="dashboard-help">
        <h3>Ayuda</h3>
        <p>Desde este panel podés gestionar los productos de la tienda.</p>
      </section>
    </div>
    </>
  );
}