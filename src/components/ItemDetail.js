import React from 'react'
import {Link} from 'react-router-dom'
import { useContext, useState} from 'react'
// import { CartContext } from '../context/CartContext'
import ItemCounter from './ItemCounter'
import { CartContext } from '../context/CartContext'

export default function ItemDetail(props){

    const {toCart} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(0)
    // const producto = props.product

    // useEffect(()=>{
    //     console.log(cantidad)
    // }, [cantidad])

    // const {addToCart} = useContext(CartContext)
    const onAddToCart = (cuantitiy) =>{
        setCantidad(cuantitiy)
        toCart(props.product, cuantitiy)
        console.log(props.product)
    } 

    return(
        <div className="itemDetail">
            <img src={props.product.image} alt="ImagenProducto" />
            <div>
                <h2>Item: {props.product.title}</h2>
                <h3>Category: {props.product.category}</h3>
                <h3>Price: ${props.product.price}</h3>
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