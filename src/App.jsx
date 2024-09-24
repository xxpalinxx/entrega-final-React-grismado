import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import './App.css'
import ItemListContainer from './Components/ItemListContainer'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path='/productos/:category' element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
