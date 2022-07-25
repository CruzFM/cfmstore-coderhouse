import { useState } from 'react';

export default function ItemCounter({stock, initial, onAddToCart}){

    const [counter, setCounter] = useState(initial);
  

    const substractItem = () =>{
      if(counter > 1){
        setCounter(prevCounter => prevCounter - 1)
      };
    };

    function addItem() {
        if (counter < stock) {
            setCounter(prevCounter => prevCounter + 1);
        };          
    };

    return (
      <div className="itemCounter">
        {/* <p>Stock:{productStock}</p> */}
        <div className="itemCounter--addSub">
          <button className="btn btn-primary" onClick={addItem}>
            +
          </button>
          <h6>Add: {counter}</h6>
          <button className="btn btn-primary" onClick={substractItem}>
            -
          </button>
        </div>
        <div className="itemCounter--toCart">
          <button
            onClick={() => onAddToCart(counter)}
            className=" btn btn-success"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
};