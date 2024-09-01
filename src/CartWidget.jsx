import React from 'react'
import imgCarrito from '../public/carrito.png'

function CartWidget() {
    return (
        <>
            <img src={imgCarrito} alt="carrito"/>
            <span>5</span>
        </>
    )
}

export default CartWidget