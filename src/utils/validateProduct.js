export const  validateProduct = (product) => {
    const errors = {};
    
    if (!product.name.trim()) {
        errors.name = 'El nombre es requerido';
    }

    if (!product.price || product.price <= 0) {
        errors.price = 'El precio debe ser mayor que cero.'
    }

    if (!product.description.trim()) {
        errors.description = 'La descripción es obligatoria';
    }

    if (!product.category.trim()) {
        errors.category = 'La categoría es obligatoria';
    }

    if (!product.file){
        errors.file = 'Debe seleccionar una imágen';
    }

    return errors;
}