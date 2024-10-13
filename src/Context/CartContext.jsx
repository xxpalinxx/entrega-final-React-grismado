import { createContext, useState } from "react";

const CartContext = createContext([])

export const CartProvider = ({children}) => {
    //state contexto carrito
    const [carrito, setCarrito] = useState([])

    function addToCart (item , cantidadSeleccionada=0) {
        const itemExist = carrito.findIndex((prod) => prod.id === item.id)
        if(itemExist >=0) { //Significa que el item ya existe
            const updatedCart = [...carrito]
            if(cantidadSeleccionada <= 1) {
                updatedCart[itemExist].cantidad++
            } else {
                updatedCart[itemExist].cantidad = updatedCart[itemExist].cantidad + cantidadSeleccionada
            }
            setCarrito(updatedCart)
        } else {
            item.cantidad = cantidadSeleccionada
            setCarrito([...carrito, item])
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