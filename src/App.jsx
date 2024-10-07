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
import { useState, useEffect } from 'react'
import { getDocs, collection, getFirestore } from 'firebase/firestore'

function App() {
  const [data, setData] = useState({})
  
  const db = getFirestore()

  useEffect(() => {
    const itemCollection = collection(db, 'items')
    setData(getDocs(itemCollection).then(snapshot => snapshot.docs.map(item => console.log(item.data()))))
    
  },[])
  console.log(`Valor de data: ${data}`)

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
