import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'


import Contador from './pages/contador'
import ContadorUseEffect from './pages/contador-useeffect'
import Menu from './pages/menu'
import Tarefas from './pages/tarefas'
import Compras from './pages/compras'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu/>} />
      <Route path="/contador" element={<Contador />} />
      <Route path="/contador2" element={<ContadorUseEffect />} />
      <Route path="/tarefas" element={<Tarefas />} />
      <Route path="/compras" element={<Compras />} />
    </Routes>
  </BrowserRouter>
    <Toaster />
  </StrictMode>
)
