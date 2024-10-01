import { useContext, useState } from "react"
import CartContext from "../Context/CartContext"
import OnAdd from "./OnAdd"
import { Link } from "react-router-dom"

const Item = ({prod}) => {
    const [count,setCount] = useState(1)
    /* const [agregadoCarrito, setAgregadoCarrito] = useState([])
    const [stockActual, setStockActual] = useState(prod.stock) */

    const {carrito, addToCart} = useContext(CartContext)

/*     const handleStock = (count, producto) => {
        if(prod.stock > 0 && addToCart){ //condicion de mas
            prod.stock = prod.stock - count
            setAgregadoCarrito(count)
            setStockActual(prod.stock)
            setCount(1)
        }else{
            const currentCart = [...carrito]
            const itemExist = currentCart.find(p => p.id === producto.id)
            if(itemExist){
                itemExist.stock += itemExist.cantidad
                setCount(itemExist.stock)
            }
        }
    } */


    return (
        <>
            <div className="container-card">
                <div className="card" >
                    <h2>{prod.nombre}</h2>
                    <Link to={`/item/${prod.id}`}>
                        <img className="card-img" src={`../../public/Img/${prod.id}.jpg`} alt="Imagen Producto" />
                    </Link>
                    <h3>Color: {prod.color}</h3>
                    <p>Precio: ${prod.precio}</p>
                    <p>Stock: {prod.stock}</p>
                    <OnAdd prod={prod} 
                    addToCart={addToCart} 
                    /* handleStock={handleStock}  */
                    count={count} 
                    setCount={setCount} />
{/*                     <button className="btnAgregarCarrito" onClick={()=>addToCart(prod)}>Agregar al Carrito</button>
 */}                </div>
            </div>
        </>
    )
}

export default Item