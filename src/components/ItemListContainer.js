import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';



export default function ItemListContainer(props){

    const [product, setProduct] = useState([]);

    useEffect( ()=>{
        const endPoint = 'https://fakestoreapi.com/products';
        axios.get(endPoint)
            .then(res => {
                const apiData = res.data;
                setProduct(apiData);
            })

    }, []);

    const searchCategory = (item)=>{
        let categoryToFind = item.category;
        categoryToFind = categoryToFind.substring(0, 3);
        if(categoryToFind === 'men'){
            return 'men';
        } else if(categoryToFind ==='wom'){
            return 'women';
        } else if(categoryToFind === 'jew'){
            return 'jewelry';
        } else if( categoryToFind === 'ele'){
            return 'electronics';
        }
    };

    return (
      <div className="itemListContainer container ">
        <div className="row">
          {product.length < 1 && 
            <div className="loaderContainer d-flex justify-content-center align-items-center"> 
              <span className="loader"></span> 
            </div>    
          }
          
          {product && product.map((product, idx) => {
            return (
              <div
                className="card col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 "
                key={idx}
              >
                <img
                  src={product.image}
                  alt="product"
                  className="card-img-top"
                />
                <div className="card--text card-body">
                  <h5 className="card-title text-center">{product.title}</h5>
                  <p className="card-text">
                    {product.description.substring(0, 50)}...
                  </p>
                  <p>${product.price}</p>
                  <p>
                    <Link to={`/category/${searchCategory(product)}`}>
                      {product.category}
                    </Link>
                  </p>
                  <Link
                    to={`/item/:id${product.id}`}
                    className="btn btn-primary"
                  >
                    Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
};