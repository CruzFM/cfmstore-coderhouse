import Header from "./components/Header"
import Hero from "./components/Hero"
import ItemListContainer from "./components/ItemListContainer"
import { useState } from 'react'
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
      
      <ItemListContainer 
        greeting="Bienvenidos a los productos"
        onAdd={onAdd}
        onSubstract={onSubstract}
        counter={counter}
        stock={productStock}
        />
      
    </>

  );
}

export default App;
