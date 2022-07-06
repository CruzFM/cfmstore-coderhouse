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
            />}
        />
        
        <Route 
          path='/item/:id'
          element={
          <ItemDetailContainer 
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
