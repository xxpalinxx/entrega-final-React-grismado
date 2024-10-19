import { useContext} from "react"
import GlobalContext from "../Context/GlobalContext"

import React from 'react'
import imgCarrito from '/carrito.png'

function CartWidget() {
    const {totalItemsInCart} = useContext(GlobalContext)
    return (
        <>
            <img src={imgCarrito} alt="carrito"/>
            <span>{totalItemsInCart}</span>
        </>
    )
}

export default CartWidget