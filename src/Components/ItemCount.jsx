import React, { useState } from 'react'
import "../styles.css"

const ItemCount = () => {
    const [count,setCount] = useState(0)

    return (
        <div className='card'>
            <div className='contador'>
                <button className='btnSumarRestar' onClick={()=>setCount(count => count-1)}> - </button>
                <h3>{count}</h3>
                <button className='btnSumarRestar' onClick={()=>setCount(count => count+1)}> + </button>
            </div>
        </div>
    )
}

export default ItemCount