import { useEffect, useState, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import GlobalContext from "../../Context/GlobalContext"  // Usamos el contexto global

const CheckOutDetail = () => {
    const { orderId } = useParams()  // Tomamos el ID de la URL
    const { fetchOrderById } = useContext(GlobalContext)  // Obtenemos la función del contexto
    const [orderData, setOrderData] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const getOrder = async () => {
            try {
                const data = await fetchOrderById(orderId)  // Usamos la función del contexto para obtener la orden
                setOrderData(data)  // Guardamos los datos de la orden
            } catch (error) {
                console.error("Error al obtener la orden: ", error)
            } finally {
                setLoading(false)
            }
        }

        if (orderId) {
            getOrder()
        }
    }, [orderId, fetchOrderById])

    if (loading) {
        return <p>Cargando detalles de la orden...</p>
    }

    if (!orderData) {
        return <p>No se encontró la orden.</p>
    }

    return (
        <div className="order-container">
            <h1>¡Gracias por tu compra!</h1>
            <div className="order-detail-grid">
                <div className="order-detail">
                    <p>Tu orden ha sido procesada con éxito.</p>
                    <h3>Detalles de la Orden:</h3>
                    <p><strong>ID de la Orden:</strong> {orderId}</p>
                    <p><strong>Nombre del comprador:</strong> {orderData.buyer.name}</p>
                    <p><strong>Email:</strong> {orderData.buyer.email}</p>
                    <p><strong>Teléfono:</strong> {orderData.buyer.phone}</p>
                    <h4>Productos comprados:</h4>
                    <ul>
                        {orderData.items.map((item, index) => (
                            <li key={index}>
                                {item.title} - ${item.price}
                            </li>
                        ))}
                    </ul>
                    <p><strong>Total:</strong> ${orderData.total}</p>
                    <button className="btn btn-dark" onClick={()=> navigate("/productos")}>Ir a productos</button>
                </div>
            </div>
        </div>
    )
}

export default CheckOutDetail