import React, { useContext } from 'react'
import './CartProduct.css'
import { BsFillTrash3Fill as Trash } from "react-icons/bs";
import { CartContext } from '../../context/CartContext';

function CartProduct({ product }) {

  const { removeProduct } = useContext(CartContext)

  return (
    <div className='checkout-product-container'>
      <div className='checkout-product'>
        <div className='product-name'>
          <img src={product.image} alt="" />
          <h3>{product.title}</h3>
        </div>
        <div className='product-information'>
          <h3>{parseFloat(product.price).toFixed(2)}€</h3>
          <h3>1</h3>
          <i><Trash onClick={() => removeProduct(product.id)} /></i>
        </div>
      </div>
      <div className='line-break'></div>
    </div>
  )
}

export default CartProduct