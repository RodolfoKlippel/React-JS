
import { useState } from 'react'
import {Routes,Route} from "react-router"

import Navegacao from './Interfaces/navegacao'

import Home from './Interfaces/Home'
import Servicos from './Interfaces/Servicos'
import Sobre from './Interfaces/Sobre'
import Contatos from './Interfaces/Contatos'

function App() {
  
  return (
    <>
      <Navegacao/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Servicos" element={<Servicos/>}/>
        <Route path="/Sobre" element={<Sobre/>}/>
        <Route path="/Contatos" element={<Contatos/>}/>
      </Routes>
    </>
  )
}

// npm i react-router
// npm i react-router-dom

export default App
