import { Item } from "../Item/Item";

export const ItemDetail =({ item }) => {
    const { addItem } = useCart();
    return <Item {...item}>
        <button onClick={() => addItem(item)}>Agregar al carrito</button>
    </Item>
}