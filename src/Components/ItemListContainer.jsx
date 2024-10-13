import "../styles.css"
import ItemList from "./ItemList"
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
            {loading ?
                <h2>Loading</h2> :
                <ItemList data={filtereData}/>
            }
        </div>
    )
}

export default ItemListContainer