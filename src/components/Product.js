import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { addQuantity, reduceQuantity, removeItem } from 'redux/reducer/cartReducer';
import ButtonCart from './ButtonCart';
import { BsTrash } from "react-icons/bs";
import { RiHeartAddFill } from "react-icons/ri";
import { toast } from 'react-toastify';


const Product = ({ data, length }) => {
  const dispatch = useDispatch();

  const handleAddQuantity = (id) => {
    dispatch(addQuantity(id));
  };
  
  const handleReduceQuantity = (id) => {
    if (data.quantity > 1) dispatch(reduceQuantity(id));
  }

  const removeItemCart = (id, name) => {
    dispatch(removeItem(id));
    toast.success(`Success remove ${name}`);
  };

  return (
    <Fragment>
      <div className='d-flex flex-column flex-sm-row'>
        <div className='d-flex justify-content-center align-items-center product mb-sm-0 mb-4 p-4 me-sm-4 me-0'>
          <img src={`./assets/${data.image}`} width={100} alt={data.name} />
        </div>

        <div className='d-flex justify-content-between w-100 flex-lg-row flex-column-reverse'>
          <div>
            <p className='fw-bold'>{data.name}</p>
            <p>{data.category} | {data.color}</p>
            <p>Size: {data.size}</p>

            <div className='flex-wrap d-flex'>
              <span className='me-4 pointer mb-lg-0 mb-2' onClick={() => removeItemCart(data.id, data.name)}>
                <BsTrash /> Remove Item
              </span>
              <span className='pointer'>
                <RiHeartAddFill /> Move To White List
              </span>
            </div>
          </div>

          <div className='d-flex align-items-center flex-lg-column flex-md-row mb-lg-0 mb-4'>
            <ButtonCart 
              quantity={data.quantity} 
              handleAddQuantity={() => handleAddQuantity(data.id)} 
              handleReduceQuantity={() => handleReduceQuantity(data.id)}
            />

            <div className='fw-bold ms-3 ms-lg-auto mt-lg-5'>
              $ {data.price * data.quantity}
            </div>
          </div>
        </div>
      </div>
            
      {data.id === 1 && length > 1 && (
        <>
          <br />
          <hr />
          <br />
        </>
      )}
    </Fragment>
  )
}

export default Product;