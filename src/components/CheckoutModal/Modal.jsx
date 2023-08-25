import React, { useContext } from 'react'
import './Modal.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import FilterButton from './../FilterButton/FilterButton';

function Modal({ isOpen, onClose }) {

    if (!isOpen) return null;

    const { cart, setCart } = useContext(CartContext)

    return (
        <div className="modal-overlay">
            {
                cart.length > 0 ?
                    <div className="modal-content">
                        <p>Your Order was successful!</p>
                        <p>Check your email for the order confirmation. Thank you for shopping with Fake Store!</p>
                        <Link to={"/"} onClick={() => {
                            setCart([])
                            onClose;
                        }}>
                            <button>Return to Main Page</button>
                        </Link>
                    </div>
                    :
                    <div className="modal-content">
                        <p>Oops! Your cart is empty!</p>
                        <button onClick={onClose}>Close</button>
                    </div>
            }
        </div>
    )
}

export default Modal