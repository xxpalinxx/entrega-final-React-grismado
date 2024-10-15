import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

function ColorFilter({ coloresDisponibles }) {
    const navigate = useNavigate()

    const handleColorChange = (event) => {
        const selectedColor = event.target.value
        if (selectedColor === "") {
            navigate(`/productos`)
        } else {
            navigate(`/productos/${selectedColor}`)
            Swal.fire({
                icon: "success",
                title: `Filtro por color seleccionado: ${selectedColor}`,
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
    }

    return (
        <div className="mb-3">
            <label htmlFor="colorFilter" className="form-label">Filtrar por color</label>
            <select id="colorFilter" className="form-select" onChange={handleColorChange}>
                <option value="">Todos los colores</option>
                {coloresDisponibles.map((color, index) => (
                    <option key={index} value={color}>
                        {color}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ColorFilter