import { useContext, useMemo } from "react"
import CartContext from "../../Context/CartContext"
import Item from "../Item"
import "./CartDetail.css"

const CartDetail = () => {
    const {carrito, removeFromCart} = useContext(CartContext)
    const isEmpty = useMemo( () => carrito.length === 0, [carrito])
    const cartTotal = useMemo(() => carrito.reduce((total, item) => total + item.cantidad * item.precio, 0),[carrito])

    const handleStock = (prod) => {
        prod.stock += prod.cantidad
        setCount(prod.stock)
    }

    const handleClickRemove = (prod) => {
        /* handleStock(prod) */
        removeFromCart(prod.id)
    }

    return (
        <div className="contenedor-carrito">
            <div id="carrito" className="p-3 cp-23">
                        {isEmpty ? (
                            <p className="text-center">El carrito esta vacio</p>
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
                                <tr key={prod.id}>
                                    <td>
                                        <img className="img-fluid" 
                                            src={`../../public/Img/${prod.id}.jpg`}  
                                            alt="imagen guitarra" 
                                        />
                                    </td>
                                    <td>{prod.nombre}</td>
                                    <td className="fw-bold">
                                            ${prod.precio}
                                    </td>
                                    <td className="flex align-items-start gap-4">
                                        <button
                                            type="button"
                                            className="btn btn-dark"
                                        >
                                            -
                                        </button>
                                            {prod.cantidad}
                                        <button
                                            type="button"
                                            className="btn btn-dark"
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td>
                                        ${prod.cantidad*prod.precio}
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            type="button"
                                            onClick={()=>removeFromCart(prod.id)}
                                        >
                                            X
                                        </button>
                                    </td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
                    <p className="text-end">Total pagar: 
                    <span className="fw-bold">${cartTotal}</span></p>
                </>
                )}      
            </div>
        </div>
    )
}

export default CartDetail