import "../styles.css"
import ItemList from "./ItemList"
import { remeras } from "../Data/productos"
import getProducts from "../Data/productos"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function ItemListContainer() {
    const [data,setData] = useState([])
    const [loading,setLoading]=useState(true)
    const {idCategory} = useParams()

    useEffect(() => {
        getProducts
        .then((respuesta) =>{
            if(idCategory){
                const newProduct = respuesta.filter(producto => producto.category === idCategory)
                setData(newProduct)
            } else {
                setData(respuesta)
            }
            setLoading(false)
        })
        .catch(error => console.error(error))
    },[idCategory])

    /* if(loading) {
        return <h2>Loading</h2>
    } */
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