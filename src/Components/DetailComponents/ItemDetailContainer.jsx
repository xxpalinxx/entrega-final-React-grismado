import React from 'react'
import "./ItemDetailContainer.css"

const ItemDetailContainer = ({producto}) => {
    return (
        <div className='item-detail-container'>
            <div className='grid-container'>
                <img src={`../../public/Img/${producto.id}.jpg`} alt={producto.nombre} />
                <ul>
                    <li>
                        <h1>{producto.nombre}</h1>
                    </li>
                    <li>
                        <h3>Color: {producto.color}</h3>
                    </li>
                    <li>
                        <h2>Precio: ${producto.precio}</h2>
                    </li>
                    <li>
                        <h3>Stock: {producto.stock}</h3>
                    </li>
                    <li>
                        <p>Descripcion: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi sint eius dicta labore quidem quisquam vero, ratione quia reiciendis quas expedita maxime, incidunt sed sit mollitia ducimus veniam veritatis nihil.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ItemDetailContainer