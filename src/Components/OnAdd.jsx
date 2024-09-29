import React, { useState } from 'react'
import "../styles.css"

const OnAdd = ({prod, addToCart}) => {
    const [count,setCount] = useState(1)

    const handleSubtractUnit = (contador) => {
        if (contador > 1) {
            setCount(count => count-1)
        }
    }

    const handleAddUnit = (contador, stock) => {
        if(contador < stock){
            setCount(count => count+1)
        }
    }


    return (
        <div className='card'>
            {prod.stock === 0 ? (
                <h3>No Stock</h3>
            ):(
            <>
                <div className='contador'>
                    <button className='btn btn-dark' onClick={()=>handleSubtractUnit(count)}> - </button>
                    <h3>{count}</h3>
                    <button className='btn btn-dark' onClick={()=>handleAddUnit(count,prod.stock)}> + </button>
                </div>
                <button className="btnAgregarCarrito" onClick={()=>addToCart(prod, count)}>Agregar al Carrito</button>
            </>
            )}
        </div>
    )
}

export default OnAdd