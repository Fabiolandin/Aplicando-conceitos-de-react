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
import Dash from './pages/dash'
import Suporte from './pages/suporte'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu/>} />
      <Route path="/contador" element={<Contador />} />
      <Route path="/contador2" element={<ContadorUseEffect />} />
      <Route path="/tarefas" element={<Tarefas />} />
      <Route path="/compras" element={<Compras />} />
      <Route path="/dash" element={<Dash />} />
      <Route path="/suporte" element={<Suporte />} />
    </Routes>
  </BrowserRouter>
    <Toaster />
  </StrictMode>
)
