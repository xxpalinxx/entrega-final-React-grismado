import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import ItemListContainer from './ItemListContainer'

function App() {
  

  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Hola" />
    </>
  )
}

export default App
