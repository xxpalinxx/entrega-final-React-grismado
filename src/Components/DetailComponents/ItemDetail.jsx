import { useContext } from "react"
import GlobalContext from "../../Context/GlobalContext"
import { useParams } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"

const ItemDetail = () => {
    const {id } = useParams()
    const { data, loading } = useContext(GlobalContext)

    console.log(id)
    console.log(data)
    if (loading) {
        return <h2>Cargando producto...</h2>
    }

    // Buscamos el producto en la lista de productos
    const producto = data.find(item => item.id === parseInt(id))
    console.log(producto)

    // Si el producto no existe, mostramos un mensaje de error
    if (!producto) {
        return <h2>El Producto no existe</h2>
    }

    // Si el producto existe, lo pasamos al componente ItemDetailContainer
    return (
        <>
            <ItemDetailContainer producto={producto} />
        </>
    )
}

export default ItemDetail