import Product from 'components/Product';
import React from 'react';
import { useSelector } from 'react-redux';
import { BsCartX } from "react-icons/bs";
import { ToastContainer } from 'react-toastify';

const ProductList = () => {
  const { cart } = useSelector((state) => state.cart);

  const emptyCart = () => {
    return (
      <div className='d-flex justify-content-center align-items-center my-5'>
        <BsCartX className='me-2' /> Your cart is empty
      </div>
    )
  }

  return (
    <div className="product-list card">
      <ToastContainer position='top-right' autoClose={3000} pauseOnHover />
      <h2 className='fs-5 fw-bold mb-4'>Cart ({cart.length} {cart.length > 1 ? 'items' : 'item'})</h2>

      {cart.length > 0 ? cart.map((data, index) => {
        return (
          <Product data={data} key={index} length={cart.length} />
        )
        }) : emptyCart()}
    </div>
  )
}

export default ProductList;