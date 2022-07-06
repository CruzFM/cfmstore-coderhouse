import React from 'react'
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function Cart(){

    const {cart } = useContext(CartContext)
    return(
        <div> 

            <button onClick={()=> console.log(cart)}>Click</button>
        
        </div>
    )
}