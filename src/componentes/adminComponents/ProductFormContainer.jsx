import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../services/productsServices";
import { uploadImage } from "../../services/uploadImage";
import "./ProductFormContainer.css";
import { ProductFormUI } from "./ProductFormUI";

export const ProductFormContainer = () => {
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({...product, [name]: value });
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0] || null;
        setFile(file);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setloading(true);

        const newErrors = validateProduct({...product, file });
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setloading(false);
            return;
        }

        try {
            const imageUrl = await uploadImage(file);
            const productData = {
                ...product,
                price: parseFloat(product.price),
                image: imageUrl,
            };

            const id = await createProduct(productData);

            setProduct({name: "", price: "", category: "", description: "" });
            setFile(null);
            navigate(`/success/${id}`);
        } catch (error) {
            setErrors({ general: error.message });
        }
    }

    return (
        <ProductFormUI 
            product={product}
            errors={errors}
            loading={loading}
            onchange={handleChange}
            onfilechange={handleFileChange}
            onsubmit={handleSubmit}
        />
    )
}