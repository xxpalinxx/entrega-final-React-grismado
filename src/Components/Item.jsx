import { useContext, useState } from "react"
import GlobalContext from "../Context/GlobalContext"
import OnAdd from "./OnAdd"
import { Link } from "react-router-dom"

const Item = ({prod}) => {
    const [count,setCount] = useState(1)

    const {addToCart} = useContext(GlobalContext)

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
                    <div className='card'>
                        <OnAdd prod={prod} 
                            addToCart={addToCart} 
                            count={count} 
                            setCount={setCount} 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item