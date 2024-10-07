import React, { useState } from 'react'
import "../styles.css"

const OnAdd = ({prod, addToCart, count, setCount}) => {

    const handleDecreaseUnit = (contador) => {
        if (contador > 1) {
            setCount(count => count-1)
        }
    }

    const handleIncreaseUnit = (contador, stock) => {
        if(contador < stock){
            setCount(count => count+1)
        }
    }

    const handleClickAdd = () => {
        addToCart(prod, count)
    }

    return (
        <div className='card'>
            {prod.stock === 0 ? (
                <h3>No Stock</h3>
            ):(
            <>
                <div className='contador'>
                    <button className='btn btn-dark' onClick={()=>handleDecreaseUnit(count)}> - </button>
                    <h3>{count}</h3>
                    <button className='btn btn-dark' onClick={()=>handleIncreaseUnit(count,prod.stock)}> + </button>
                </div>
                <button className="btnAgregarCarrito" 
                        onClick={handleClickAdd}
                >
                    Agregar al Carrito
                </button>
            </>
            )}
        </div>
    )
}

export default OnAdd