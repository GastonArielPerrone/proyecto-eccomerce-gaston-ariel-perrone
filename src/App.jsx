import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { CartView } from './componentes/Cart/CartView'
import { Dashboard } from './componentes/Dashboard/Dashboard'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import { Login } from './componentes/Login/Login'
import { ProtectedRoute } from './componentes/ProtectedRoute/ProtectedRoute'
import { ProductFormContainer } from './componentes/adminComponents/ProductFormContainer'
import { ProductFormSuccess } from './componentes/adminComponents/ProductFormSucces'
import { AdminLayout } from './layouts/AdminLayout'
import { PublicLayout } from './layouts/PublicLayout'

function App() {

  return (
    <>
        <Routes>
          <Route element={<PublicLayout />} >
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<CartView />} />
          </Route>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          } >
            <Route index element={<Navigate to={"dashboard"} />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products/new" element={<ProductFormContainer />} />
            <Route path="products/success/:id" element={ <ProductFormSuccess /> } />
          </Route>
        </Routes>
    </>
  )
}


export default App
