import { useState,useEffect } from "react"
import { remeras } from "../Data/productos"
import OnAdd from "./OnAdd"

const Item = () => {
    const [data,setData] = useState([])
    const [loading,setLoading]=useState(true)

    useEffect(() => {
        const traerProductos = () => {
            return new Promise(resolve => {
                setTimeout(()=>{
                    resolve(remeras)
                },1200)
            })
        }
        traerProductos().then(resultdos=>{
            setData(resultdos)
            setLoading(false)
        })
    },[])

    if(loading) {
        return <h2>Loading</h2>
    }

    return (
        <>
            {data.map(prod => (
                <div className="card" key={prod.id}>
                    <h2>{prod.nombre}</h2>
                    <img className="card-img" src={`../../public/Img/${prod.id}.jpg`} alt="Imagen Producto" />
                    <h3>{prod.color}</h3>
                    <p>{prod.precio}</p>
                    <OnAdd/>
                    <button className="btnAgregarCarrito">Agregar al Carrito</button>
            </div>
            ))}
        </>
    )
}

export default Item