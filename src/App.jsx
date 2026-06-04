import { Route, Routes } from 'react-router-dom'
import './App.css'
import { CartView } from './componentes/Cart/CartView'
import { Footer } from './componentes/Footer/Footer'
import { Header } from './componentes/Header/Header'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import { ProductFormContainer } from './componentes/adminComponents/ProductFormContainer'
import { ProductFormSuccess } from './componentes/adminComponents/ProductFormSucces'

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartView />} />
          <Route path="/admin" element={<ProductFormContainer />} />
          <Route path="/success/:id" element={ <ProductFormSuccess /> } />
        </Routes>
      </main>
      <Footer />
    </>
  )
}


export default App
