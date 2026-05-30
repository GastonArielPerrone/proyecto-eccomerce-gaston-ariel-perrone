import { useEffect, useState } from "react";
import { getProducts } from "../../services/productsServices";
import { ItemList } from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        setLoading(true);
        getProducts()
        .then(data => setProducts(data))
        .catch(error => console.error('Hubo un error:', error))
        .finally(() => {setLoading(false)});
    }, []);

    if (loading) return <p>Cargando...</p>;
    

    return <ItemList products={products}/>
}

export default ItemListContainer;