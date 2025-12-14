import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cart from './react-cart/Cart'

createRoot(document.getElementById('cart-root')).render(
  <StrictMode>
    <Cart/>
  </StrictMode>,
)
