import {useState, useEffect} from 'react';
import ProductSortedCard from './ProductSortedCard';
import axios from 'axios';


export default function Electronics(){
    const [products , setProducts] = useState([]);

    useEffect( ()=> {
        const endPoint = 'https://fakestoreapi.com/products';
        axios.get(endPoint)
            .then(res => {
                const apiData = res.data;
                const womenClothes = apiData.filter(item => item.category === "electronics")
                setProducts(womenClothes);
            })

    },[]);

    return(
        <>
            {products.length < 1 && 
                <div className="loaderContainer d-flex justify-content-center align-items-center"> 
                    <span className="loader"></span> 
                </div>    
            }

            {products && <ProductSortedCard products={products} />}
        
        </>
    );
};