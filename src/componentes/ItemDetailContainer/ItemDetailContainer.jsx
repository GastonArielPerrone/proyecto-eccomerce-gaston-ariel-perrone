import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        fetch("/data/products.json")
        .then(res => res.json())
        .then(data =>{
            const item = data.find((element) => String(element.id) === id);
            if (item) {
                setItemDetail(item);
                return;
            }

            setItemDetail(null);
            throw new Error("Elemento no encontrado");
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [id]);

   if (loading) return <p>Cargando...</p>;

    return (
        <section>
            <h1>Detalles del producto</h1>
            <div className="products-container">
                <ItemDetail item={itemDetail} />
            </div>
        </section>
    )

}