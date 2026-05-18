import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Nav.css';

export const Nav = () => {
    const { getTotalItem } = useCart();
    const totalItem = getTotalItem();
    return (
    <nav>
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/carrito">Carrito
                {totalItem > 0 && <span className='cart-count'>{totalItem}</span>}
                </Link>
            </li>
        </ul>
    </nav>
    )
}