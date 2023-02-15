import React from 'react'
import Button from 'react-bootstrap/Button';

const ButtonCart = ({ quantity, handleAddQuantity, handleReduceQuantity }) => {
  return (
    <div className='flex-nowrap d-flex align-items-center'>
      <Button onClick={handleReduceQuantity} variant="light">-</Button>
      <span className='mx-3'>{quantity}</span>
      <Button onClick={handleAddQuantity} variant="light">+</Button>
    </div>
  )
}

export default ButtonCart