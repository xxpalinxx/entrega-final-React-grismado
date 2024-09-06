import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import ItemListContainer from './Components/ItemListContainer'

function App() {
  

  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Hola" />
    </>
  )
}

export default App
