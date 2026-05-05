import { Link } from "react-router-dom"
import { Item } from "../Item/Item"
import "./ItemList.css"

export const ItemList = ({ products }) => {
    return (
        <section className="item-list">
            {products.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                    <Item {...product} />
                </Link>
            ))}
        </section>
    )
}