import { Link } from 'react-router-dom'
import './Nav.css'

export const Nav = () => {
    return (
    <nav>
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/carrito">Carrito</Link>
            </li>
        </ul>
    </nav>
    )
}