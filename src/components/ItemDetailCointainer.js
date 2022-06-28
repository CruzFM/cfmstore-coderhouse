import musculosaDeathwalker from "../images/items/musculosaDeathwalker.jpg"
import remeraBlackRaven from "../images/items/remeraBlackraven.jpg"
import remeraTriskel from "../images/items/remeraTriskel.jpg"
import buzoTriskel from "../images/items/buzoTriskel.jpg"

//components
import ItemDetail from "./ItemDetail"

//Hooks
import { useState } from 'react'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'

export default function ItemDetailContainer(props){

    let {id} = useParams()

    id = id.substring(3, id.length +1)

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
            setProduct(resolve.find(prod => prod.id === parseInt(id) ))
        })
    }, [])

    const onAdd = props.onAdd
    const onSubstract = props.onSubstract
    const counter = props.counter
    const stock = props.stock

    return(
        <>
            {!product && <h1>Loading {id}</h1>}
            {product && <div className="itemDetailContainer">
                <ItemDetail 
                    product={product} 
                    onAdd={onAdd} 
                    onSubstract={onSubstract}
                    counter={counter}
                    stock={stock}
                    />
            </div>}

        </>
    )
}