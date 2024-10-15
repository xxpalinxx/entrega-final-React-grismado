import { createContext, useState, useEffect } from "react"
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore"
import Swal from "sweetalert2"

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB_iPucQqj_y7hs4nuF4XjTOMzO73WG0yo",
    authDomain: "ecommerce-codergrismado.firebaseapp.com",
    projectId: "ecommerce-codergrismado",
    storageBucket: "ecommerce-codergrismado.appspot.com",
    messagingSenderId: "779174060517",
    appId: "1:779174060517:web:407fd8620fb771f028cf0c"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Crea el contexto global
const GlobalContext = createContext([])

// Proveedor del contexto
export const GlobalProvider = ({ children }) => {
  // Estado de productos desde Firebase
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    // Estado del carrito
    const [carrito, setCarrito] = useState([])
    const [orderId, setOrderId] = useState(null)

    // Función para obtener productos desde Firebase
    useEffect(() => {
        const fetchData = async () => {
            try {
                const itemCollection = collection(db, 'items')
                const snapshot = await getDocs(itemCollection)
                const itemDB = snapshot.docs.map(doc => ({
                    id: doc.id, 
                    ...doc.data()
                }));
                setData(itemDB)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching data: ", error)
            }
        };

        fetchData();
    }, [])

    const addToCart = (item, cantidadSeleccionada = 0) => {
        const itemExist = carrito.findIndex((prod) => prod.id === item.id);
        if (itemExist >= 0) {
            const updatedCart = [...carrito]
            if (cantidadSeleccionada <= 1) {
                updatedCart[itemExist].cantidad++
            } else {
                updatedCart[itemExist].cantidad += cantidadSeleccionada;
            }
            setCarrito(updatedCart)
        } else {
            item.cantidad = cantidadSeleccionada
            setCarrito([...carrito, item])
        }
    }

    const removeFromCart = (id) => {
        setCarrito(prevCart => prevCart.filter(prod => prod.id !== id))
        Swal.fire({
            icon: "success",
            title: "Producto eliminado del carrito",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        })
    }

    const clearCart = () => {
        setCarrito([])
    }

    const totalItemsInCart = carrito.reduce((acc, item) => acc + item.cantidad, 0)

    const totalPrice = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

    // Función para crear una orden en Firestore
    const createOrder = async (buyer) => {
        const items = carrito.map(item => ({
            id: item.id,
            price: item.precio,
            title: item.nombre,
        }))

        const order = {
            buyer,
            items,
            total: totalPrice,
            date: serverTimestamp()
        }

        try {
            const docRef = await addDoc(collection(db, 'ordenes'), order)
            setOrderId(docRef.id)
            clearCart()
            console.log("Orden creada con ID: ", docRef.id)
        } catch (error) {
            console.error("Error al crear la orden: ", error)
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                data,
                loading,
                carrito,
                setCarrito,
                addToCart,
                removeFromCart,
                clearCart,
                totalItemsInCart,
                totalPrice,
                createOrder, // Exportamos la función para crear la orden
                orderId, // ID de la última orden creada
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext