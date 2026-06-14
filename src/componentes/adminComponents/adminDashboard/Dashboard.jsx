import { Link } from "react-router-dom"

export const Dashboard = () => {

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h2>Panel de administración</h2>

                <div className="header-actions">
                    <Link to="/">Volver a la tienda</Link>
                </div>
            </header>

            <section className="dashboard-actions">
                <h3>Acciones rápidas</h3>

                <div class="actions-grid">
                    <Link to="/admin/products/new" className="action-card">➕ Cargar</Link>
                    <Link to="#" className="action-card disabled">✏ Modificar</Link>
                    <Link to="#" className="action-card disabled">🗑 Eliminar</Link>
                </div>
            </section>
        </div>
    )
}