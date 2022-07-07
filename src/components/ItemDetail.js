import React from 'react'
import {Link} from 'react-router-dom'
import { useContext, useState} from 'react'
// import { CartContext } from '../context/CartContext'
import ItemCounter from './ItemCounter'
import { CartContext } from '../context/CartContext'

export default function ItemDetail(props){

    const {toCart} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(0)

    // useEffect(()=>{
    //     console.log(cantidad)
    // }, [cantidad])

    // const {addToCart} = useContext(CartContext)
    const onAddToCart = (cuantitiy) =>{
        setCantidad(cuantitiy)
        toCart(props.product, cuantitiy)
        // console.log(props.product)
    } 

    return(
        <div className="itemDetail">
            <img src={props.product.img} alt="ImagenProducto" />
            <div>
                <h2>Artículo: {props.product.nombre}</h2>
                <h3>Tipo: {props.product.tipo}</h3>
                <h3>Precio: ${props.product.precio}</h3>
                {/* <button onClick={addToCart(props.product, props.counter)}>Add to cart</button> */}
                <ItemCounter 
                    stock={5}
                    initial={1}
                    onAddToCart={onAddToCart}
                />
                <Link to='/cart'>Cart</Link>
            </div>
        </div>
    )
}