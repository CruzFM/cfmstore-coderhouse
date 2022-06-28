//Components
import Header from "./components/Header"
import Hero from "./components/Hero"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailCointainer"
import Category from "./components/Category"
import Cart from "./components/Cart"

//Modules
import {Routes, Route} from 'react-router-dom'

//Hooks
import { useState } from 'react'

//Styles
import "./styles.css"


function App() {

  const [productStock, setProductStock] = useState(5)

  const [counter, setCounter] = useState(0)

  const onAdd = () => {
    if (productStock > 0){
      setCounter(prevCounter => prevCounter + 1)
      setProductStock(prevProductStock => prevProductStock - 1)
    }
  }

  const onSubstract = () =>{
    if(counter > 0){
      setCounter(prevCounter => prevCounter - 1)
      setProductStock(prevProductStock => prevProductStock + 1 )
    }
  }

  return (
    <>
      <Header />

      <Hero />
      
      <Routes>
        
        <Route 
          exact path='/' 
          element={  
            <ItemListContainer 
            greeting="Bienvenidos a los productos"
            onAdd={onAdd}
            onSubstract={onSubstract}
            counter={counter}
            stock={productStock}
            />}
        />
        
        <Route 
          path='/item/:id'
          element={
          <ItemDetailContainer 
              onAdd={onAdd} 
              onSubstract={onSubstract}       
              counter={counter}
              stock={productStock}
            />
          }
        />
        
        <Route 
          path='/category/:id' 
          element={<Category/>} 
        />

        <Route 
          path='/cart' 
          element={<Cart />} 
        />
        
      </Routes>
      
    </>

  );
}

export default App;
