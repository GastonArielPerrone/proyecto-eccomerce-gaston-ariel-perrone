import { useAuth } from "../../context/AuthContext";

export const Dashboard = () => {
    const { logout } = useAuth();

  return (
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
          <Link to="/admin/products/new" className="action-card">
            ➕ Cargar
          </Link>

          <Link to="#" className="action-card disabled">
            ✏️ Modificar
          </Link>

          <Link to="#" className="action-card disabled">
            🗑️ Eliminar
          </Link>
        </div>
      </section>

      <section className="dashboard-help">
        <h3>Ayuda</h3>
        <p>Desde este panel podés gestionar los productos de la tienda.</p>
      </section>
    </div>
  );
}