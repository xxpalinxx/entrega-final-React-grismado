import React, { useContext } from 'react'
import "../styles.css"
import GlobalContext from '../Context/GlobalContext'
import Swal from 'sweetalert2'

const OnAdd = ({ prod, count, setCount }) => {

    const { addToCart} = useContext(GlobalContext)
    
    const handleDecreaseUnit = (contador) => {
        if (contador > 1) {
            setCount(count => count-1)
        }
    }

    const handleIncreaseUnit = (contador, stock) => {
        if(contador < stock){
            setCount(count => count+1)
        }
    }

    const handleClickAdd = () => {
        addToCart(prod, count)
        Swal.fire({
            icon: "success",
            title: "Item agregado al carrito",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        })
    }

    return (
        <>
            {prod.stock === 0 ? (
                <h3>No Stock</h3>
            ):(
            <>
                <div className='contador'>
                    <button className='btn btn-dark' onClick={()=>handleDecreaseUnit(count)}> - </button>
                    <h3>{count}</h3>
                    <button className='btn btn-dark' onClick={()=>handleIncreaseUnit(count,prod.stock)}> + </button>
                </div>
                <button className="btnAgregarCarrito" 
                        onClick={handleClickAdd}
                >
                    Agregar al Carrito
                </button>
            </>
            )}
        </>
    )
}

export default OnAdd