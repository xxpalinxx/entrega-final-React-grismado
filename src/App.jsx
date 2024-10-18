import { GlobalProvider } from './Context/GlobalContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetail from './Components/DetailComponents/ItemDetail'
import CartDetail from './Components/Cart/CartDetail'
import CheckOutDetail from './Components/CheckOut/CheckOutDetail'
import PageNotFound from './Components/PageNotFound'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productos' element={<ItemListContainer />}/>
          <Route path='/productos/:idColor' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetail />} />
          <Route path='/cart' element={<CartDetail />} />
          <Route path='/gracias/:orderId' element={<CheckOutDetail />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
