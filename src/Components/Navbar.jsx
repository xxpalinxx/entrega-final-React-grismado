

import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import imgLogo from '../../public/logo.png'

function Navbar() {

    return (
        <nav>
            <Link to={'/'}><img className="logo" src={imgLogo} alt="logo" /></Link>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/productos'}>Productos</Link></li>
                <li><Link to={'/cart'}><CartWidget /></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar