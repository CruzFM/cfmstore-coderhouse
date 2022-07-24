import React from 'react'
import {Link} from 'react-router-dom'
import { useContext, useState} from 'react'
// import { CartContext } from '../context/CartContext'
import ItemCounter from './ItemCounter'
import { CartContext } from '../context/CartContext'

export default function ItemDetail(props){

    const {toCart} = useContext(CartContext);

    const [cantidad, setCantidad] = useState(0);

    const onAddToCart = (cuantitiy) =>{
        setCantidad(cuantitiy)
        toCart(props.product, cuantitiy)
        console.log(props.product)
    };

    return(
        <div className="container">
            <div className='row'>

            <img src={props.product.image} alt="ImagenProducto" className='itemDetail-img col-lg-6 col-12 col-sm-12' />
            <div className='itemDetails col-12 col-sm-12 col-lg-6 '>
                <h2>Item: {props.product.title}</h2>
                <h4>Category: {props.product.category}</h4>
                <h5>Price: ${props.product.price}</h5>
                {/* <button onClick={addToCart(props.product, props.counter)}>Add to cart</button> */}
                <ItemCounter 
                    stock={5}
                    initial={1}
                    onAddToCart={onAddToCart}
                />
                <Link to='/cart'>Cart</Link>
            </div>

            </div>
        </div>
    )
}