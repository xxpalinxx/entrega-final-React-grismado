import CartWidget from "./CartWidget"
import imgLogo from '../public/logo.png'

function Navbar() {
    return (
        <nav>
            <img className="logo" src={imgLogo} alt="logo" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Productos</a></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default Navbar