import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'

const Cart = () => {


   const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    const handler = (e) => {
      setCart(prev => [...prev, e.detail])
    }

    window.addEventListener('add-to-cart', handler)
    return () => window.removeEventListener('add-to-cart', handler)
  }, [])

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div>
      <p>Items: {cart.length}</p>
      <p>Total: ${total.toFixed(2)}</p>

      {cart.map((item, index) => (
        <CartItem
          key={index}
          item={item}
          onRemove={() => removeItem(index)}
        />
      ))}
    </div>
  )
}

export default Cart