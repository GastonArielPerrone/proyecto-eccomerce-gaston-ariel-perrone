import { useNavigate } from "react-router-dom";

const { createContext, useContext, useState  } = require("react");

const CartContext = createContext();

export const useCart =() => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe usarse dentro de CartProvider");
    }
    return context;
}

export const CartProvider = ({ children }) => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    const isInCart =(item) => {
        const isInCart = cart.some((element) => element.id === item.id);
        return isInCart;
    }

    const addItem =(item) => {
        if (isInCart(item)) {
            alert("El producto ya existe en el carrito");
            return;
        }

        setCart([...cart, item]);
        alert("Producto agregado al carrito 🎉");
    }

    const removeItem = (id) => {
         const updateCart = cart.filter((element) => element.id !== id);
         setCart(updateCart);
         alert("Producto eliminado del carrito ✅");
    }

    const clearCart =() => {
        setCart([]); 
    }

    const getTotalItem =() => {
        return  cart.length;
    }

    const getCartTotal =() => {
        return cart.reduce((total, item) => total + item.price, 0);
    }

    const checkout =() => {
        alert("Su compra ha sido realizada 🎉");
        clearCart();
        navigate("/");
    }

    const values = {addItem, removeItem, clearCart, getTotalItem, getCartTotal, checkout};
    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}