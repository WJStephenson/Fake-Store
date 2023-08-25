//the header component is used across all pages

import { Link } from 'react-router-dom'
import './Header.css'
import { HiOutlineShoppingCart as Cart } from 'react-icons/hi'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

function Header() {

  //retrieve cart context to display number of items in the cart
  const { cart } = useContext(CartContext)

  //header contains links back to the hompage and to the checkout. The checkout icon displays number of items in the cart
  return (
    <div className="header-container">
      <Link to="/">Fake Store</Link>
      <div className="shopping-cart">
        <Link to={"/checkout"}>
          <div className='cart-display'>
            <span className='cart-count'>{cart.length}</span>
          </div>
          <i><Cart /></i>
        </Link>
      </div>
    </div>
  )
}

export default Header