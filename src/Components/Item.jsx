import { useState,useEffect } from "react"
import OnAdd from "./OnAdd"
import { Link } from "react-router-dom"

const Item = ({data}) => {

    return (
        <>
            {data.map(prod => (
                <div className="card" key={prod.id}>
                    <h2>{prod.nombre}</h2>
                    <Link to={`/item/${prod.id}`} >
                        <img className="card-img" src={`../../public/Img/${prod.id}.jpg`} alt="Imagen Producto" />
                    </Link>
                    <h3>Color: {prod.color}</h3>
                    <p>Precio: ${prod.precio}</p>
                    <p>Stock: {prod.stock}</p>
                    <OnAdd stock={prod.stock}/>
                    <button className="btnAgregarCarrito">Agregar al Carrito</button>
            </div>
            ))}
        </>
    )
}

export default Item