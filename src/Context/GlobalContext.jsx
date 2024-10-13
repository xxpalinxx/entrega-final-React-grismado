import { createContext, useState, useEffect } from "react"
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore"

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

// Crea el contexto global
const GlobalContext = createContext([])

// Proveedor del contexto
export const GlobalProvider = ({ children }) => {
  // Estado de productos desde Firebase
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    // Estado del carrito
    const [carrito, setCarrito] = useState([])

    // Función para obtener productos desde Firebase
    useEffect(() => {
        const db = getFirestore(app)
        const fetchData = async () => {
            try {
                const itemCollection = collection(db, 'items')
                const snapshot = await getDocs(itemCollection)
                const itemDB = snapshot.docs.map(doc => ({
                    id: doc.id, 
                    ...doc.data()
                }))
                setData(itemDB)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching data: ", error)
            }
        }

        fetchData()
    }, [])

    // Funciones para manejar el carrito
    const addToCart = (item, cantidadSeleccionada = 0) => {
        const itemExist = carrito.findIndex((prod) => prod.id === item.id)
        if (itemExist >= 0) { // El item ya existe en el carrito
            const updatedCart = [...carrito]
        if (cantidadSeleccionada <= 1) {
            updatedCart[itemExist].cantidad++
        } else {
            updatedCart[itemExist].cantidad += cantidadSeleccionada
        }
        setCarrito(updatedCart)
        } else {
            item.cantidad = cantidadSeleccionada
            setCarrito([...carrito, item])
        }
    }

    const removeFromCart = (id) => {
        setCarrito(prevCart => prevCart.filter(prod => prod.id !== id))
    }

    const clearCart = () => {
        setCarrito([])
    }

    // Función para calcular el total de productos en el carrito
    const totalItemsInCart = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    

    // Función para calcular el precio total del carrito
    const totalPrice = () => {
        return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
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
        }}
        >
        {children}
        </GlobalContext.Provider>
    );
};

// Exporta el contexto para su uso en otros componentes
export default GlobalContext;