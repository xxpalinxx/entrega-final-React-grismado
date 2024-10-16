import { useContext } from "react"
import GlobalContext from "../../Context/GlobalContext"
import { useParams } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"

const ItemDetail = () => {
    const {id } = useParams()
    const { data, loading } = useContext(GlobalContext)

    if (loading) {
        return <h2>Cargando producto...</h2>
    }

    const producto = data.find(item => item.id === parseInt(id))

    if (!producto) {
        return <h2>El Producto no existe</h2>
    }

    return (
        <>
            <ItemDetailContainer producto={producto} />
        </>
    )
}

export default ItemDetail