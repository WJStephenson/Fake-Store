import { Link } from 'react-router-dom'
import './Header.css'
import { HiOutlineShoppingCart as Cart } from 'react-icons/hi'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

function Header() {

  const { cart } = useContext(CartContext)

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