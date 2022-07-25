import axios from 'axios';
import {useEffect, useState} from 'react';
import ProductSortedCard from './ProductSortedCard';

export default function Men(){

    const [products, setProducts] = useState([])

    useEffect( ()=>{
        const endPoint = 'https://fakestoreapi.com/products';
        axios.get(endPoint)
            .then(res =>{
                const apiData = res.data;
                const menProducts = apiData.filter(item => item.category === "men's clothing")
                setProducts(menProducts)
            });
    },[]);

    return (
        <ProductSortedCard products={products} />
    );
};