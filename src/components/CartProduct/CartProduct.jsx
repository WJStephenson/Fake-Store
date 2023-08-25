//this component will return a product card for the chkout page with the ability to remove the product from the cart

import { useContext } from 'react'
import './CartProduct.css'
import { BsFillTrash3Fill as Trash } from "react-icons/bs";
import { CartContext } from '../../context/CartContext';

function CartProduct({ product }) {

  // retrieve context function to remove product from cart
  const { removeProduct } = useContext(CartContext)

  //show product image, price, quantity in cart and icon to remove product. icon will have onclick event to call context function
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