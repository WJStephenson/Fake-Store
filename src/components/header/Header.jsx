import './Header.css'
import { HiOutlineShoppingCart as Cart } from 'react-icons/hi'

function Header() {
  return (
    <div className="header-container">
        <a href="/">Fake Store</a>
        <div className="shopping-cart">
            <div className='cart-display'>
                <span className='cart-count'>0</span>
            </div>
            <i><Cart /></i>
        </div>
    </div>
  )
}

export default Header