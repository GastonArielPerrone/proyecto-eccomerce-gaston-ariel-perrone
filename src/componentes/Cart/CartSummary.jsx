import { useCart } from "../../context/CartContext";

export const CartSummary =() => {
     const { getCartTotal, checkout } = useCart();
     const total = getCartTotal();

     return <>
     <button onClick={checkout}>Finalizar compra</button>
     </>
}