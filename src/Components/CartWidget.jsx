import { useContext, useMemo } from "react"
import CartContext from "../Context/CartContext"

import React from 'react'
import imgCarrito from '../../public/carrito.png'

function CartWidget() {
    const {carrito} = useContext(CartContext)
    const itemTotal = useMemo(() => carrito.reduce((total, item) => total + item.cantidad, 0),[carrito])
    return (
        <>
            <img src={imgCarrito} alt="carrito"/>
            <span>{itemTotal}</span>
        </>
    )
}

export default CartWidget