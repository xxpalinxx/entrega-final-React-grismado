import GlobalContext from './Context/GlobalContext'
import { GlobalProvider } from './Context/GlobalContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getDocs, collection, getFirestore } from 'firebase/firestore'

import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetail from './Components/DetailComponents/ItemDetail'
import CartDetail from './Components/Cart/CartDetail'
import PageNotFound from './Components/PageNotFound'
import Home from './Components/Home'

import './App.css'

function App() {
  /* const [data, setData] = useState([])
  
  const db = getFirestore()

  useEffect(() => {
    const itemCollection = collection(db, 'items')
    const itemDB = []
    getDocs(itemCollection).then(snapshot => snapshot.docs.map(item => {
      itemDB.push(item.data())
    }))
    setData(itemDB)
  },[])

  console.log(data) */

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
