

export default function ItemDetail(props){
    return(
        <div className="itemDetail">
            <img src={props.product.img} alt="ImagenProducto" />
            <div>
                <h2>Artículo: {props.product.nombre}</h2>
                <h3>Tipo: {props.product.tipo}</h3>
                <h3>Precio: ${props.product.precio}</h3>
            </div>
        </div>
    )
}