import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import cartWidget from "../images/carros.png";

export default function CartWidget(){
    const { inCart } = useContext(CartContext);

    return(
        <>
            <img className="cartWidget" alt="cartWidget" src={cartWidget}></img>
            <span>{ inCart() }</span>
        </>
    );
};