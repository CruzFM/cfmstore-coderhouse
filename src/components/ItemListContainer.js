import { useState, useEffect } from "react"
import musculosaDeathwalker from "../images/items/musculosaDeathwalker.jpg"
import remeraBlackRaven from "../images/items/remeraBlackraven.jpg"
import remeraTriskel from "../images/items/remeraTriskel.jpg"
import buzoTriskel from "../images/items/buzoTriskel.jpg"
import {Link} from 'react-router-dom'

const productsArray = [
    {
        "id": 1,
        "nombre": "Musculosa Deathwalker",
        "tipo": "Musculosa",
        "desc": "Musculosa del álbum Deathwalker",
        "precio": 2500,
        "talle": "M",
        "img": musculosaDeathwalker,
        "cantidad": 1,
        "banda": "Eluveitie"
    },
    {
        "id": 2,
        "nombre": "Remera Blackraven",
        "tipo": "Remera",
        "desc": "Una remera del single Blackraven",
        "precio": 3000,
        "talle": "M",
        "cantidad": 1,
        "img": remeraBlackRaven,
        "banda": "Eluveitie"
    },
    {
        "id": 3,
        "nombre": "Remera Triskel",
        "tipo": "Remera",
        "desc": "Una remera del single Triskel",
        "precio": 3000,
        "talle": "M",
        "img": remeraTriskel,
        "cantidad": 1,
        "banda": "Eluveitie" 
    },
    {
        "id": 4,
        "nombre": "Buzo Triskel",
        "tipo": "Buzo",
        "desc": "Un buzo del single Triskel",
        "precio": 3200,
        "talle": "M",
        "img": buzoTriskel,
        "cantidad": 1,
        "banda": "Eluveitie" 
    }
]

export default function ItemListContainer(props){

    const [product, setProduct] = useState([])

    useEffect( ()=>{
        const productsPromise = new Promise(
            (resolve) =>{
                setTimeout(() => {
                    resolve(productsArray)
                }, 2000);
            }
        )
        productsPromise.then((resolve) =>{
            setProduct(resolve)
        })
    }, [])
    
    return(
        <div className="itemListContainer">
            {
                product.map( (product, idx) =>{
                    return(
                        <div className='card' key={idx}>
                            <img src={product.img} alt="product"/>
                            <div className="card--text">
                                <h2>{product.nombre}</h2>
                                <p>{product.desc}</p>
                                <p>{product.precio}</p>
                                <p> 
                                    <Link to={`/category/:id`}>
                                    {product.tipo}
                                    </Link>
                                </p>
                                <div>
                                    <p>Stock: {props.stock}</p>
                                    <p> You're taking: {props.counter} </p>
                                    <button onClick={props.onAdd}>+</button>
                                    <button onClick={props.onSubstract}>-</button>
                                    <br />
                                    <Link to={`/item/:id${product.id}`} className='linkPages'>Details</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}