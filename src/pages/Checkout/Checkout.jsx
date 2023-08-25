//this page shows the current products in the basket, the total cost and the checkout button

import { useContext, useEffect, useState } from 'react'
import './Checkout.css'
import { CartContext } from '../../context/CartContext'
import CartProduct from './../../components/CartProduct/CartProduct';
import Modal from './../../components/CheckoutModal/Modal';

function Checkout() {

    //retrieve the cart contents from the context state
    const { cart } = useContext(CartContext)

    //states for the total cost of the cart and for the modal being hidden
    const [cost, setCost] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)

    //update total cost when the cart contents change
    useEffect(
        () => {
            let total = 0;
            cart.map(item => total += parseFloat(item.price))
            setCost(total.toFixed(2))
        }, [cart]
    )

    //set modal open to true
    const openModal = () => {
        setIsModalOpen(true)
    }

    //set modal open to false
    const closeModal = () => {
        setIsModalOpen(false)
    }


    return (
        <div className='checkout-wrapper'>
            <div className='checkout-container'>
                <div className='column-headings'>
                    <h3>Item</h3>
                    <div className='sub-headings'>
                        <h3>Price</h3>
                        <h3>Quantity</h3>
                        <h3>Remove</h3>
                    </div>
                </div>
                <div className='line-break'></div>
                <div className='cart-contents'>
                    {/* show a message if the cart is empty
                    show products from cart context state if any */}
                    {
                        cart.length > 0 ?
                            cart.map(item => <CartProduct
                                product={item}
                                key={item.id} />)
                            :
                            <p>You have no items in your cart</p>
                    }

                </div>
                <div className='total-checkout'>
                    <div className='total'>
                        <h2>Total:</h2>
                        <h2>{cost}€</h2>
                    </div>
                    <button onClick={openModal}>Checkout</button>
                </div>
            </div>
            {/* pass props to modal component so it can close itself */}
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}

export default Checkout