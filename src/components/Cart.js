import React from 'react'
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function Cart(){

    const {cart } = useContext(CartContext)
    return(
        
        <div className="itemListContainer"> 
                {cart.map( (item, idx) =>{

                return(
                    <div className='card' key={idx}>
                        <img src={item.img} alt="product"/>
                        <div className="card--text">
                            <h2>{item.nombre}</h2>
                            <p>{item.desc}</p>
                            <p>${item.precio}</p>
                            <p>Cantidad: {item.cantidad}</p>
                            {/* <p> 
                                <Link to={`/category/:id`}>
                                {item.tipo}
                                </Link>
                            </p> */}
                             {/* <div>
                                <Link to={`/item/:id${product.id}`} className='linkPages'>Details</Link>
                            </div> */}
                        </div>
                    </div>
                    )
                }       

                )}
        </div>
    )
}