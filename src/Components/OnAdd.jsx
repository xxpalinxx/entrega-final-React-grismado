import React, { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../Context/CartContext'
import "../styles.css"

const OnAdd = ({prod, addToCart, handleStock, count, setCount}) => {
    const {carrito} = useContext(CartContext)

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

    const handleClickAdd = () => {
        addToCart(prod, count)
        /* handleStock(count) */
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