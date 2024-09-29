import CartContext from './Context/CartContext'
import { CartProvider } from './Context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetail from './Components/DetailComponents/ItemDetail'
import CartDetail from './Components/Cart/CartDetail'
import PageNotFound from './Components/PageNotFound'
import Home from './Components/Home'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productos' element={<ItemListContainer/>}/>
          <Route path='/productos/:idColor' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetail />} />
          <Route path='/cart' element={<CartDetail />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
