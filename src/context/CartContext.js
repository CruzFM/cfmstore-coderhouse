import React from 'react'
import { createContext, useState } from 'react'
import { useEffect } from 'react'

//crear contexto y exportar
export const CartContext = createContext()

export const CartProvider = ( {children} ) => {


    //estados
    const [cart, setCart] = useState([])

    useEffect( ()=>{
        console.log(cart)
    },[cart])

    const toCart = (item, cuantity) =>{
        setCart([...cart, {...item, cantidad: cuantity}])
        console.log(cart)
        // console.log(item, cuantitiy)
    }

    function cantidadEnCart(){
        let cantidadTotal = 0
        cart.forEach( (item) => (cantidadTotal + item.cantidad) )
        console.log(cantidadTotal)
        return cantidadTotal
    }


    return (
        <CartContext.Provider value={ {cart, toCart, cantidadEnCart} }>
            {children}
        </CartContext.Provider>)


}