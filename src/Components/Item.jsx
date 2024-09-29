import { useContext } from "react"
import CartContext from "../Context/CartContext"
import OnAdd from "./OnAdd"
import { Link } from "react-router-dom"

const Item = ({data}) => {
    const {addToCart} = useContext(CartContext)
    return (
        <>
            {data.map(prod => (
            <div className="container-card" key={prod.id}>
                <div className="card" >
                    <h2>{prod.nombre}</h2>
                    <Link to={`/item/${prod.id}`} >
                        <img className="card-img" src={`../../public/Img/${prod.id}.jpg`} alt="Imagen Producto" />
                    </Link>
                    <h3>Color: {prod.color}</h3>
                    <p>Precio: ${prod.precio}</p>
                    <p>Stock: {prod.stock}</p>
                    <OnAdd prod={prod} addToCart={addToCart}/>
{/*                     <button className="btnAgregarCarrito" onClick={()=>addToCart(prod)}>Agregar al Carrito</button>
 */}                </div>
            </div>
            ))}
        </>
    )
}

export default Item