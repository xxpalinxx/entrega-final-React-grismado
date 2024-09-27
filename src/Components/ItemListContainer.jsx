import "../styles.css"
import ItemList from "./ItemList"
import getProducts from "../Data/productos"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function ItemListContainer() {
    const [data,setData] = useState([])
    const [loading,setLoading]=useState(true)
    const {idColor} = useParams()
    console.log(idColor)

    useEffect(() => {
        getProducts
        .then((respuesta) =>{
            if(idColor){
                const productoFiltrado = respuesta.filter(producto => producto.color === idColor)
                setData(productoFiltrado)
            } else {
                setData(respuesta)
            }
            setLoading(false) 
        })
        .catch(error => {console.error(error)})
    },[idColor])

    return (
        <div className="container">
            {loading ?
                <h2>Loading</h2> :
                <ItemList data={data}/>
            }
        </div>
    )
}

export default ItemListContainer