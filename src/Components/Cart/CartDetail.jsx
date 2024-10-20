import { useContext, useMemo, useState, useEffect } from "react"
import GlobalContext from "../../Context/GlobalContext"
import CartItemDetail from "./CartItemDetail"
import "./CartDetail.css"
import CheckOut from "../CheckOut/CheckOut"

const CartDetail = () => {
    const { carrito, clearCart } = useContext(GlobalContext)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const total = carrito.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
        setCartTotal(total)
    }, [carrito])

    const isEmpty = useMemo(() => carrito.length === 0, [carrito])

    return (
        <div className="contenedor-carrito">
            <div id="carrito" className="p-3 cp-23">
                {isEmpty ? (
                    <p className="text-center">El carrito está vacío</p>
                ) : (
                    <>
                        <table className="w-100 table">
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {carrito.map(prod => (
                                    <CartItemDetail 
                                        prod={prod}
                                        key={prod.id}
                                    />
                                ))}
                            </tbody>
                        </table>
                        <div className="contenedor-btnCarrito-total">
                            <button className="btn btn-dark vaciar_carrito" onClick={()=>clearCart()}>Vaciar Carrito</button>
                            <p className="text-end">
                                Total a pagar: <span className="fw-bold">${cartTotal}</span>
                            </p>
                        </div>
                    </>
                )}
            </div>
            <CheckOut />
        </div>
    )
}

export default CartDetail