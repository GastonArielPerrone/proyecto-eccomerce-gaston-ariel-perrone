export const ProductFormUI =({ product, errors, loading, onChange, onFileChange, onSubmit }) => {
    return (
        <section>
            <form className="product-form" onSubmit={onSubmit}>
                <h2>Agregar nuevo producto</h2>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={onChange}
                        required
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div>
                    <label>Precio:</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={onChange}
                        min="0.00"
                        required
                    />
                    {errors.price && <span className="error">{errors.price}</span>}
                </div>

                <div>
                    <label>Categoría:</label>
                    <input
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={onChange}
                        required
                    />
                    {errors.category && <span className="error">{errors.category}</span>}
                </div>

                <div>
                    <label>Descripción:</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={onChange}
                        required
                    />
                    {errors.description && <span className="error">{errors.description}</span>}
                </div>

                <div>
                    <label>Imagen:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={onFileChange}
                        required
                    />
                    {errors.file && <span className="error">{errors.file}</span>}
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Guardando...' : 'Guardar producto'}
                </button>
                {errors.general && <span className="error">{errors.general}</span>}
            </form>
        </section>
    )
}