import React, { useEffect, useState } from 'react'
import "../styles.css"

const OnAdd = () => {
    const [count,setCount] = useState(0)

    const handleSubtractUnit = (contador) => {
        if (contador > 0) {
            setCount(count => count-1)
        }
    }

    const handleAddUnit = () => {
            setCount(count => count+1)
    }


    return (
        <div className='card'>
            <div className='contador'>
                <button className='btnSumarRestar' onClick={()=>handleSubtractUnit(count)}> - </button>
                <h3>{count}</h3>
                <button className='btnSumarRestar' onClick={handleAddUnit}> + </button>
            </div>
        </div>
    )
}

export default OnAdd