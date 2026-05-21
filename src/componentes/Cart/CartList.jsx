import { useCart } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import "./CartList.css";

export const CartList =() => {
     const {cart} = useCart();

     return (
        <div className="cart-list">
            {cart.map((element) => {
                return <CartItem key={element.id} item={element} />;
            })}
        </div>
     )
}