//this component will return a modal to cover the viewport and provide a completion or empty basket message when the checkout button is clicked on the checkout page

import { useContext } from 'react'
import './Modal.css'
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Modal({ isOpen, onClose }) {

    //set up useNavigate to return to the home page when checkout is complete
    let navigate = useNavigate()

    //retrieve the context state and functions
    const { cart, setCart } = useContext(CartContext)

    //this function will close the modal, set the cart to empty and then navigate back to the hompage when checkout is complete
    const orderComplete = () => {
        onClose()
        setCart([])
        navigate("/")
    }

    return (
        isOpen?
        <div className="modal-overlay">
            {/* the modal will either display aa complete message, and return to the hompage, if the basket contains anything;
            otherwise it will display a cart empty message */}
            {
                cart.length > 0 ?
                    <div className="modal-content">
                        <p>Your Order was successful!</p>
                        <p>Check your email for the order confirmation. Thank you for shopping with Fake Store!</p>
                        <button onClick={orderComplete}>Return to Main Page</button>
                    </div>
                    :
                    <div className="modal-content">
                        <p>Oops! Your cart is empty!</p>
                        <button onClick={onClose}>Close</button>
                    </div>
            }
        </div>
        :
        <></>
    )
}

export default Modal