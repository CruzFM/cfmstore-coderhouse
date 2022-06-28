import {Link} from 'react-router-dom'

export default function ItemDetail(props){
    return(
        <div className="itemDetail">
            <img src={props.product.img} alt="ImagenProducto" />
            <div>
                <h2>Artículo: {props.product.nombre}</h2>
                <h3>Tipo: {props.product.tipo}</h3>
                <h3>Precio: ${props.product.precio}</h3>
                <button onClick={props.onAdd}>+</button>
                <p>Stock:{props.stock}</p>
                <p>On Cart:{props.counter}</p>
                <button onClick={props.onSubstract}>-</button>
                <Link to='/cart'>Cart</Link>
            </div>
        </div>
    )
}