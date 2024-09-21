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
      </Routes>›
    </BrowserRouter>
  )
}

export default App
