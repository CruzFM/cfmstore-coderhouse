import musculosaDeathwalker from "../images/items/musculosaDeathwalker.jpg"
import remeraBlackRaven from "../images/items/remeraBlackraven.jpg"
import remeraTriskel from "../images/items/remeraTriskel.jpg"
import buzoTriskel from "../images/items/buzoTriskel.jpg"

//components
import ItemDetail from "./ItemDetail"

//Hooks
import { useState } from 'react'
import { useEffect } from 'react'

export default function ItemDetailContainer(){

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

    const [product, setProduct] = useState({})

    useEffect( ()=>{
        const productsPromise = new Promise(
            (resolve) =>{
                setTimeout(() => {
                    resolve(productsArray)
                }, 2000);
            }
        )
        productsPromise.then((resolve) =>{
            setProduct(resolve[0])
        })
    }, [])

    return(
        <div className="itemDetailContainer">
            <ItemDetail product={product} />
        </div>
    )
}