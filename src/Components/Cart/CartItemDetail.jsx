import { useContext, useState, useEffect } from "react"
import GlobalContext from "../../Context/GlobalContext"

export default function CartItemDetail({ prod }) {
    const { removeFromCart, setCarrito } = useContext(GlobalContext)
    
    const [count, setCount] = useState(prod.cantidad)

    useEffect(() => {
        const updatedCarrito = (prevCarrito) => 
            prevCarrito.map((item) => 
                item.id === prod.id ? { ...item, cantidad: count } : item
            )

        setCarrito(updatedCarrito)
    }, [count, prod.id, setCarrito])

    const handleDecreaseUnit = () => {
        if (count > 1) {
            setCount(count => count - 1)
        }
    }

    const handleIncreaseUnit = () => {
        const stock = prod.stock
        if (count < stock) {
            setCount(count => count + 1)
        }
    }

    const subtotal = count * prod.precio

    return (
        <tr>
            <td>
                <img 
                    className="img-fluid" 
                    src={`../../public/Img/${prod.id}.jpg`}  
                    alt={prod.nombre} 
                />
            </td>
            <td>{prod.nombre}</td>
            <td className="fw-bold">${prod.precio}</td>
            <td className="flex align-items-start gap-4">
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={handleDecreaseUnit}
                >
                    -
                </button>
                {count}
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={handleIncreaseUnit}
                >
                    +
                </button>
            </td>
            <td>${subtotal}</td>
            <td>
                <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => removeFromCart(prod.id)}
                >
                    X
                </button>
            </td>
        </tr>
    )
}