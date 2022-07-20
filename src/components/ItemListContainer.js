import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import { traeProductos } from "../services/firestore"
import axios from 'axios'


export default function ItemListContainer(props){

    const [product, setProduct] = useState([])

    useEffect( ()=>{
        const endPoint = 'https://fakestoreapi.com/products';
        axios.get(endPoint)
            .then(res => {
                console.log(res.data)
                const apiData = res.data;
                setProduct(apiData)
            })



        // traeProductos()
        //     .then( (res) => {
        //         setProduct(res);
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })


    }, [])
    
    return(
        <div className="itemListContainer">
            {
                product.map( (product, idx) =>{
                    return(
                        <div className='card' key={idx}>
                            <img src={product.image} alt="product"/>
                            <div className="card--text">
                                <h2>{product.title}</h2>
                                <p>{product.description.substring(0, 50)}</p>
                                <p>{product.price}</p>
                                <p> 
                                    <Link to={`/category/:id`}>
                                    {product.category}
                                    </Link>
                                </p>
                                <div>
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