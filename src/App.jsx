import GlobalContext from './Context/GlobalContext'
import { GlobalProvider } from './Context/GlobalContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetail from './Components/DetailComponents/ItemDetail'
import CartDetail from './Components/Cart/CartDetail'
import PageNotFound from './Components/PageNotFound'
import Home from './Components/Home'

import './App.css'
import CheckOut from './Components/CheckOut/CheckOut'

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
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
