import "../styles.css"
import ItemContainer from "./ItemContainer"
import ItemCount from "./ItemCount"


function ItemListContainer({children}) {

    return (
        <div className="container">
            <ItemContainer/>
        </div>
    )
}

export default ItemListContainer