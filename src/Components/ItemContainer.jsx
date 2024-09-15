import ItemCount from "./ItemCount"

const ItemContainer = () => {
    return (
        <div className="card">
            <h2>Nombre</h2>
            <img src="" alt="Imagen Producto" />
            <h3>Descripcion</h3>
            <p>Precio</p>
            <ItemCount/>
            <button className="btnAgregarCarrito">Agregar al Carrito</button>
        </div>
    )
}

export default ItemContainer