import { useNavigate } from "react-router-dom"

function ColorFilter({ coloresDisponibles }) {
    const navigate = useNavigate()

    const handleColorChange = (event) => {
        const selectedColor = event.target.value
        if (selectedColor === "") {
            navigate(`/productos`)
        } else {
            navigate(`/productos/${selectedColor}`)
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