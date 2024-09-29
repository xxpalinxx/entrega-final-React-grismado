import { useContext } from 'react'
import CartContext from '../Context/CartContext'

import React from 'react'
import imgCarrito from '../../public/carrito.png'

function CartWidget() {
    const {carrito,addToCart,removeFromCart} = useContext(CartContext)


    return (
        <>
            <img src={imgCarrito} alt="carrito"/>
            <span>5</span>
        </>
    )
}

export default CartWidget