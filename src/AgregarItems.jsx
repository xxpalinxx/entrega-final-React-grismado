import { doc, getFirestore, addDoc, collection } from "firebase/firestore"
import { useState,useEffect } from "react"
import getProducts from "./Data/productos"

export default function AgregarItems() {
    const [data,setData] = useState([])
    const [loading,setLoading]=useState(true)

    useEffect(() => {
        getProducts
        .then(respuesta => setData(respuesta))
        .catch(error => {console.error(error)})
    },[])

    console.log(data)

    /* for (const item of data) {
        for (const element in item) {
            console.log(element, item[element])
        }
    } */
    
    const db = getFirestore()
    const itemCollection = collection(db,'items')

    for (let i = 0; data.length > 0; i++) {
        const item = {
            color: data[i].color,
            id: data[i].id,
            nombre: data[i].nombre,
            precio: Number(data[i].precio),
            stock: Number(data[i].stock)
        }

        addDoc(itemCollection, item).then(({id}) => {
            console.log(id)
            console.log(`Item ${item.nombre} agregado`)
        })




    }


    return (
        <>AgregarItems</>
    )
}
