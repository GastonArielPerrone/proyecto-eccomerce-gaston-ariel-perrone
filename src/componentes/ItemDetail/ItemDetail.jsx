import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";

export const ItemDetail = ({ item }) => {
    const { addItem } = useCart();

    if (!item) {
        return <p>Producto no encontrado.</p>;
    }

    return (
        <Item {...item}>
            <button onClick={() => addItem(item)}>Agregar al carrito</button>
        </Item>
    );
};