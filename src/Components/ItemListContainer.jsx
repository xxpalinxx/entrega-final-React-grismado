import "../styles.css"
import ItemList from "./ItemList"
import getProducts from "../Data/productos"
import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"

import GlobalContext from '../Context/GlobalContext'

function ItemListContainer() {
    const [filtereData,setFilteredData] = useState([])
    const [loading,setLoading]=useState(true)
    const {idColor} = useParams()

    const { data } = useContext(GlobalContext)

    useEffect(() => {
        if (data.length > 0) {
            if (idColor) {
                // Si hay idColor, filtrar por color
                const productoFiltrado = data.filter(producto => producto.color === idColor);
                setFilteredData(productoFiltrado);
            } else {
                // Si no hay idColor, mostrar todos los productos
                setFilteredData(data);
            }
            setLoading(false); // Cambia el estado de carga después de actualizar los datos filtrados
        }
    },[idColor, data])

    console.log(data)

    return (
        <div className="container">
            {loading ?
                <h2>Loading</h2> :
                <ItemList data={filtereData}/>
            }
        </div>
    )
}

export default ItemListContainer