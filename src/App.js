//Components
import Header from "./components/Header"
import Hero from "./components/Hero"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailCointainer"
import Category from "./components/Category"
import Cart from "./components/Cart"
import Electronics from "./components/categories/Electronics"
import Jewelry from "./components/categories/Jewelry"
import Men from "./components/categories/Men"
import Women from "./components/categories/Women"

//Modules
import {Routes, Route} from 'react-router-dom'

//Hooks

//Styles
import "./styles.css"
import "./bootstrap/bootstrap.min.css"

function App() {

  return (
    <>
      <Header />
      
        <Routes>
          
          <Route 
            exact path='/' 
            element={  
              <ItemListContainer />}
          />
          
          <Route 
            path='/item/:id'
            element={
            <ItemDetailContainer />
            }
          />
          
          <Route 
            path='/categories' 
            element={<Category/>} 
          />

          <Route 
            path='/cart' 
            element={<Cart />} 
          />

          <Route 
            path='/category/electronics' 
            element={<Electronics />} 
          />
          
          <Route 
            path='/category/jewelry' 
            element={<Jewelry />} 
          />

          <Route 
            path='/category/men' 
            element={<Men />} 
          />

          <Route 
            path='/category/women' 
            element={<Women />} 
          />

        </Routes>
      
    </>

  );
}

export default App;
