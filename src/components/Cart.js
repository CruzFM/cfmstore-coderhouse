import React from 'react'
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function Cart(){

    const {cart, subTotal, totalPrice, removeFromCart } = useContext(CartContext)

    return(
        <>
        <div className='container'>

            <div className='d-flex justify-content-center align-items-center'>
                <h2>Precio Total: $ {totalPrice()}</h2>
            </div>
            
            <div className="itemListContainer container">

                <div className='row'>                        
                    {cart.map( (item, idx) =>{

                        return(
                            <div className='card col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12' key={idx}>
                                <img src={item.image} alt="product"/>
                                <div className="card--text">
                                    <h5>{item.title}</h5>
                                    <p>{item.description.substring(0, 50)}</p>
                                    <p>${item.price}</p>
                                    <p> Quantity: {item.quantity}</p>
                                    <p>Subtotal: ${subTotal(item)} </p>
                                    <button onClick={()=> removeFromCart(item.id)} className='btn btn-danger'>Delete</button>
                                </div>
                            </div>

                        )
                    
                    })}
                </div>
     
            </div>

        </div>
        </>
    )
}