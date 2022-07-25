import { useState, useEffect } from "react";
import axios from 'axios';
import ProductSortedCard from './ProductSortedCard';

export default function Women(){

    const [products , setProducts] = useState([]);

    useEffect( ()=> {
        const endPoint = 'https://fakestoreapi.com/products';
        axios.get(endPoint)
            .then(res => {
                const apiData = res.data;
                const womenClothes = apiData.filter(item => item.category === "women's clothing")
                setProducts(womenClothes);
            })

    },[])

    return(
        <ProductSortedCard products={products} />
    );

};