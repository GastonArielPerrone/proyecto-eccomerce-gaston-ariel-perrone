import { Nav } from "../Nav/Nav"
import './Header.css'

export const Header = () => {
    return <header>
        <img className="logo" src="/GAPsport_logo.png" alt="GAPsport Logo" />
        <Nav />
    </header>
}