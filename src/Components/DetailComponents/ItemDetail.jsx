import { remeras } from "../../Data/productos"
import { useParams } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"

const ItemDetail = () => {
    const {id} = useParams()

    const producto = remeras.find(remera => remera.id === parseInt(id))

    if(!producto){
        return <h2>El Producto no existe </h2>
    }
    return (
        <>
            <ItemDetailContainer producto={producto}/>
        </>
    )
}

export default ItemDetail