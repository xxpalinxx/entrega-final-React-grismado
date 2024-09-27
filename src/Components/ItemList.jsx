import Item from "./Item"
import PageNotFound from "./PageNotFound"


const ItemList = ({data}) => {
    
    if (data.length === 0) {
        return <PageNotFound/>
    } 

    return (
        <>
                <Item data={data}/>
        </>
    )
}

export default ItemList