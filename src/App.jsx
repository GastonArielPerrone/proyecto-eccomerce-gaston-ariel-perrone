import { Route, Routes } from 'react-router-dom'
import './App.css'
import { CartView } from './componentes/Cart/CartView'
import { Footer } from './componentes/Footer/Footer'
import { Header } from './componentes/Header/Header'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartView />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}


export default App
