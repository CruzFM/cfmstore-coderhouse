import { createContext, useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

//create context and export
export const CartContext = createContext();

export const CartProvider = ( {children} ) => {


    //states
    const [cart, setCart] = useState([]);

    useEffect( ()=>{
        console.log(cart)
    },[cart])

    const toCart = (item, qntity) =>{
        const addedToCartMessage = ()=>{
            Swal.fire('Added to cart', 'Go to the Cart section to finish your purchase', 'success');
        };
        if(isInCart(item.id)){
            let prodInCart = cart.find(prod => prod.id === item.id);
            let newQuantity = prodInCart.quantity + qntity;
            if(prodInCart.quantity >= 5 || newQuantity > 5){
                Swal.fire('No more stock', 'Sorry for the inconvenience', 'error');
            } else{
                let indexOfProduct = cart.indexOf(prodInCart);
                cart[indexOfProduct].quantity = newQuantity;
                removeFromCart(prodInCart.id);
                setCart( prevCart => {
                    return(
                        [...prevCart, {...prodInCart }]
                    );
                })
                addedToCartMessage();
            };
        } else{

            setCart([...cart, {...item, quantity: qntity}]);
            addedToCartMessage();
        };
    };

    function inCart(){
        let total = 0;
        cart.forEach( (item) => {
            total = total + item.quantity;
        })
        return total;
    };

    const isInCart = (id) =>{
        return cart.some( (prod) => prod.id === id);
    };

    const subTotal = (product)=>{
        let total = 0;
        total = total + (product.price * product.quantity);
        return total;
    };

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


};