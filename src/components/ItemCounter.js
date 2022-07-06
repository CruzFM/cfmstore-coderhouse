import { useState } from 'react'

export default function ItemCounter({stock, initial, onAddToCart}){

    const [counter, setCounter] = useState(initial)
  

    const substractItem = () =>{
      if(counter > 1){
        setCounter(prevCounter => prevCounter - 1)
      }
    }

    function addItem() {
        if (counter < stock) {
            setCounter(prevCounter => prevCounter + 1);
        }          
    }
    


    return(
        
        <div className="itemCounter">
            {/* <p>Stock:{productStock}</p> */}
            <p>To add:{counter}</p>
            <div className="itemCounter--addSub">
                <button onClick={addItem}>+</button>
                <button onClick={substractItem}>-</button>
            </div>
            <button onClick={ ()=>onAddToCart(counter)}>Add to Cart</button>
        </div>
    )
}