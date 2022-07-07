import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import cartWidget from "../images/carros.png"

export default function CartWidget(){
    const { cart, cantidadEnCart } = useContext(CartContext)


    return(
        <>
            <img className="cartWidget" alt="cartWidget" src={cartWidget}></img>
            <span>{cantidadEnCart()}</span>
        </>
    )
}