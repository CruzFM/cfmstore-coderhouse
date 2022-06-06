import Header from "./components/Header"
import Hero from "./components/Hero"
import ItemListContainer from "./components/ItemListContainer"
import "./styles.css"


function App() {
  return (
    <>
      <Header />

      <Hero />
      
      <ItemListContainer greeting="Bienvenidos a los productos" />
    </>

  );
}

export default App;
