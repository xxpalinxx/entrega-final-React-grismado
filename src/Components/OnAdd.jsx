import React, { useEffect, useState } from 'react'
import "../styles.css"

const OnAdd = () => {
    const [count,setCount] = useState(0)

    /* const handleCount = (contador) => {
        if (contador === 0) {
            return (<div className='contador'>
                <button className='btnSumarRestar'> - </button>
                <h3>{count}</h3>
                <button className='btnSumarRestar' onClick={()=>setCount(count => count+1)}> + </button>
            </div>)
        }
        return (<div className='contador'>
                <button className='btnSumarRestar' onClick={()=>setCount(count => count-1)}> - </button>
                <h3>{count}</h3>
                <button className='btnSumarRestar' onClick={()=>setCount(count => count+1)}> + </button>
            </div> )
    } */


    return (
        <div className='card'>
            {count > 0 ?
            <div className='contador'>
                <button className='btnSumarRestar' onClick={()=>setCount(count => count-1)}> - </button>
                <h3>{count}</h3>
                <button className='btnSumarRestar' onClick={()=>setCount(count => count+1)}> + </button>
            </div> :
            <div className='contador'>
                <button className='btnSumarRestar'> - </button>
                <h3>{count}</h3>
                <button className='btnSumarRestar' onClick={()=>setCount(count => count+1)}> + </button>
            </div>}
            
        </div>
    )
}

export default OnAdd