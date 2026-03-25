import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'


import Contador from './pages/contador'
import ContadorUseEffect from './pages/contador-useeffect'
import Menu from './pages/menu'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu/>} />
      <Route path="/contador" element={<Contador />} />
      <Route path="/contador2" element={<ContadorUseEffect />} />
    </Routes>
  </BrowserRouter>
    <Toaster />
  </StrictMode>
)
