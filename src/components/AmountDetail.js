import React from 'react'
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

const AmountDetail = () => {
  const { cart } = useSelector((state) => state.cart);

  const temporaryAmount = cart.reduce((res, item) => {
    return res + (item.price * item.quantity)
  }, 0);

  const shippingCost = () => {
    let cost = 0;
    if (cart.length > 0) cost = 10;
    return cost;
  };

  return (
    <div className='card'>
      <h2 className='fs-5 fw-bold mb-4'>The total amount of</h2>

      <tr className='w-100 d-flex justify-content-between'>
        <td>Temporary Amount</td>
        <td>$ {temporaryAmount}</td>
      </tr>
      <tr className='w-100 d-flex justify-content-between'>
        <td>Shipping</td>
        <td>$ {shippingCost()}</td>
      </tr>

      <hr />

      <tr className='w-100 d-flex justify-content-between fw-bold mb-4'>
        <td>Total amount</td>
        <td>$ {temporaryAmount + shippingCost()}</td>
      </tr>

      <Button className='w-100 fw-bold'>Go To Checkout</Button>
    </div>
  )
}

export default AmountDetail;