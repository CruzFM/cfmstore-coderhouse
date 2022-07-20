
//components
import ItemDetail from "./ItemDetail"
import { traeProductos } from "../services/firestore"


//Hooks
import { useState } from 'react'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'

//Services
import axios from 'axios';

export default function ItemDetailContainer(props){

    let {id} = useParams()

    id = id.substring(3, id.length +1)

    const [product, setProduct] = useState({})

    useEffect( ()=>{
    const endPoint = `https://fakestoreapi.com/products/${parseInt(id)}`
    axios.get(endPoint)
        .then(res => {
            const apiData = res.data
            setProduct(apiData)
        })
}, [])


    return(
        <>
            {!product && <h1>Loading {id}</h1>}
            {product && <div className="itemDetailContainer">
                <ItemDetail 
                    product={product} 
                    />
            </div>}
        {/* <h1>hola Fer</h1> */}
        </>
    )
}