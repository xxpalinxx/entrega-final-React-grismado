import React, { useState, useContext } from "react"
import GlobalContext from "../../Context/GlobalContext"
import { Navigate, useNavigate } from "react-router-dom"
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore"

const CheckOut = () => {
    const { carrito, totalPrice, clearCart } = useContext(GlobalContext)
    const [buyer, setBuyer] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const navigate = useNavigate()

    const db = getFirestore()

    // Función para manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target
        setBuyer((prevBuyer) => ({
            ...prevBuyer,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Comprobaciones antes de proceder
        if (!buyer.name || !buyer.email || !buyer.phone) {
            alert("Por favor, completa todos los campos.")
            return
        }

        if (carrito.length === 0) {
            alert("El carrito está vacío.")
            return
        }

        const order = {
            buyer,
            date: Timestamp.fromDate(new Date()),
            items: carrito.map(item => ({
                id: item.id,
                title: item.nombre,
                price: item.precio,
            })),
            total: totalPrice
        }

        try {
            const ordersCollection = collection(db, "ordenes")
            const docRef = await addDoc(ordersCollection, order)

            // Limpia el carrito y navega a la página de agradecimiento
            clearCart()
            navigate("/productos")
            //sweet alert o tostify
        } catch (error) {
            console.error("Error al realizar la compra: ", error)
        }
    }

    return (
        <div className="container mt-5">
            <h2>Check Out</h2>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={buyer.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={buyer.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="phone" className="col-sm-2 col-form-label">Teléfono</label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={buyer.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-dark mt-3">Comprar</button>
            </form>
        </div>
    )
}

export default CheckOut