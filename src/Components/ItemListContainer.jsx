import "../styles.css"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"

import GlobalContext from '../Context/GlobalContext'
import ColorFilter from "./ColorFilter"

function ItemListContainer() {
    const [filteredData,setFilteredData] = useState([])
    const [loading,setLoading]=useState(true)
    const {idColor} = useParams()

    const coloresDisponibles = ["gris", "negro", "amarillo", "blanco", "rojo", "violeta", "azul"]

    const { data } = useContext(GlobalContext)

    useEffect(() => {
        if (data.length > 0) {
            if (idColor) {
                const productoFiltrado = data.filter(producto => producto.color === idColor)
                setFilteredData(productoFiltrado)
            } else {
                setFilteredData(data)
            }
            setLoading(false)
        }
    },[idColor, data])

    return (
        <div className="container">
                <ColorFilter coloresDisponibles={coloresDisponibles} />
            <div className="grid-item-container">
                {loading ?
                    <h2>Loading</h2> :
                    <ItemList data={filteredData}/>
                }
            </div>
        </div>
    )
}

export default ItemListContainer