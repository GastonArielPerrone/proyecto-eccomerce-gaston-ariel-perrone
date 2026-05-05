import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/data/products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error))
        .finally(() => {
            console.log('Fetch attempt completed');
        });
    }, []);

    return <ItemList products={products}/>
}

export default ItemListContainer;