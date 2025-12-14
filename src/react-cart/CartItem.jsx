import React from 'react'

const Cartitem = ({item, onRemove}) => {
  return (
     <div style={{ borderBottom: '1px solid #ddd', marginBottom: 10 }}>
      <p>{item.title}</p>
      <p>${item.price}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  )
}

export default Cartitem