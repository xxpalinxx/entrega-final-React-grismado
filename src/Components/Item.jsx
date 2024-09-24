import { useState,useEffect } from "react"
import OnAdd from "./OnAdd"

const Item = ({data}) => {
    
    const {id,nombre,color,precio,stock} = data

    return (
        <>
            {data.map(prod => (
                <div className="card" key={prod.id}>
                    <h2>{prod.nombre}</h2>
                    <img className="card-img" src={`../../public/Img/${prod.id}.jpg`} alt="Imagen Producto" />
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