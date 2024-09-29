import { createContext, useState } from "react";

const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    function addToCart (item) {
        const itemExist = carrito.findIndex((prod) => prod.id === item.id)
        if(itemExist >=0) { //Significa que el item ya existe
            const updatedCart = [...carrito]
            updatedCart[itemExist].cantidad++
            setCarrito(updatedCart)
            console.log('Agregado...', item.id)
        } else {
            item.cantidad = 1
            setCarrito([...carrito, item])
            console.log('Agregado...', item.id)
        }
    }

    function removeFromCart(id) {
        setCarrito(prevCart => prevCart.filter(prod => prod.id !== id))
    }

    return(
        <CartContext.Provider value={{carrito, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext