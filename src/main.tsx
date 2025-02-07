import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './App'
import { RouterProvider } from 'react-router-dom'
import CartProvider from './pages/Contexts/CartContext'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <Toaster position='top-center'
      reverseOrder={true}/>
      <RouterProvider router={router}/>
    </CartProvider>
  </StrictMode>,
)
