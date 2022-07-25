import { useState, useEffect } from "react";
import axios from 'axios';
import ProductSortedCard from './ProductSortedCard';

export default function Jewelry(){

    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        const endPoint = 'https://fakestoreapi.com/products';
        axios.get(endPoint)
            .then(res => {
                const apiData = res.data;
                const jewelsProducts = apiData.filter(item => item.category === 'jewelery');
                setProducts(jewelsProducts);
            })
    },[] );

    return(
        <ProductSortedCard products={products} />
    );
}