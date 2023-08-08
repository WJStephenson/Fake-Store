import './Header.css'
import { HiOutlineShoppingCart as Cart } from 'react-icons/hi'

export function Header() {
  return (
    <div className="header-container">
        <h1>Fake Store </h1>
        <div className="shopping-cart">
            <div className='cart-display'>
                <span className='cart-count'>0</span>
            </div>
            <i><Cart /></i>
        </div>
    </div>
  )
}