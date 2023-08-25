//this page shows product details when a card on the homepage is clicked on

import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import axios from 'axios';
import { CartContext } from '../../context/CartContext';

function ProductDetails() {

    //retrieve cart context state and functions 
    const { addProduct, cart, removeProduct } = useContext(CartContext)
    //retrieve product ID passed from the homepage card via URL
    const { productid } = useParams()
    //state to store product
    const [product, setProduct] = useState('');
    //state to store if product is already in the cart to update the button
    const [inCart, setInCart] = useState(false)

    //axios call to retrieve product info through api based on url param ID on page load with empty dependancy array
    useEffect(
        () => {
            axios.get(`https://fakestoreapi.com/products/${productid}`)
                .then(res => {
                    setProduct(res.data)
                })
                .catch(err => console.log(err))
        }, []
    )

    //see if product has been added to the cart when the cart is updated
    useEffect(
        () => {
            setInCart(cart?.find(item => item.id == productid))
        }, [cart]
    )

    return (
        <div className='detail-container'>
            <img src={product.image} placeholder={product.title}></img>
            <div className='product-detail'>
                <h3>{product.title}</h3>
                <h3>${parseFloat(product.price).toFixed(2)}</h3>
                <h4>Description</h4>
                <p>{product.description}</p>
                {/* update button to add or remove product from cart depending on it already being in the cart */}
                {
                    inCart ?
                        <button onClick={() => removeProduct(product.id)}>Remove</button>
                        :
                        <button onClick={() => addProduct(product)}>Add to Cart</button>
                }

            </div>
        </div>
    )
}

export default ProductDetails