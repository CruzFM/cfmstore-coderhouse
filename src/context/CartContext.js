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

    const toCart = (item, cuantitiy) =>{
        setCart([...cart, {...item, cantidad: cuantitiy}])
        console.log(cart)
        // console.log(item, cuantitiy)
    }



    // const addToCart = (item, cuantity) => {
    //     setCart([...cart, {...item, cuantity}])
    // }

    console.log(children)

    return (
        <CartContext.Provider value={ {cart, toCart} }>
            {children}
        </CartContext.Provider>)


}