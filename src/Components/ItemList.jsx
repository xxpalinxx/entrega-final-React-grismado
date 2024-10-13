import Item from "./Item"
import PageNotFound from "./PageNotFound"


const ItemList = ({data}) => {

    if (data.length === 0) {
        return <PageNotFound/>
    } 
    
    console.log(data)
    return (
        <>
            {data.map(prod => 
                <Item 
                    prod={prod} 
                    key={prod.id}
                />
            )}
        </>
    )
}

export default ItemList