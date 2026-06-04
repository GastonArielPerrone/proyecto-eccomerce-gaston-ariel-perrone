import { useNavigate, useParams } from "react-router-dom";

export const ProductFormSuccess = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    return (
        <section className="success-page">
            <div className="success-icon">✅</div>
            <h2>Producto cargado con éxito</h2>
            <p>ID de producto: {id}</p>
            <p>Puede cargar otro haciendo clic en el botón.</p>

            <button onClick={() => navigate("/admin", { replace: true })} className="success-button">
                Agregar otro producto
            </button>
        </section>
    )

}