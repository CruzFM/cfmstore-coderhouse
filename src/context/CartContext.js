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

    const toCart = (item, qntity) =>{
        if(isInCart(item.id)){
            let prodInCart = cart.find(prod => prod.id === item.id)
            let indexOfProduct = cart.indexOf(prodInCart)
            let newQuantity = prodInCart.quantity;
            newQuantity = newQuantity + qntity;
            cart[indexOfProduct].quantity = newQuantity
            removeFromCart(prodInCart.id);
            setCart( prevCart => {
                return(
                    [...prevCart, {...prodInCart }]
                )
            })
        } else{

            setCart([...cart, {...item, quantity: qntity}])
            console.log(cart)
            // console.log(item, cuantitiy)
        }
    }

    function inCart(){
        let total = 0
        cart.forEach( (item) => {
            total = total + item.quantity
        })
        return total
    }

    const isInCart = (id) =>{
        return cart.some( (prod) => prod.id === id);
    };

    const subTotal = (product)=>{
        let total = 0;
        total = total + (product.price * product.quantity)
        return total;
    }

    const totalPrice = () =>{
        let total = 0;
        cart.forEach(item => total = total + (item.quantity * item.price) );
        return total;
    }

    const removeFromCart = (id) =>{
        let idToFind = id;
        const newCart = cart.filter(item => item.id !== idToFind);
        setCart(newCart);
    };

    return (
        <CartContext.Provider value={ {cart, toCart, inCart, subTotal, totalPrice, removeFromCart} }>
            {children}
        </CartContext.Provider>)


}