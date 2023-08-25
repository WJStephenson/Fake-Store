// this component will return a product card for the homepage with links to more detail and the ability to add the product to the cart

import React, { useContext, useEffect, useState } from 'react'
import './Card.css'
import axios from 'axios'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

function Card({ product }) {

    //retrieve context states and functions from CartContext
    const { cart, addProduct, removeProduct } = useContext(CartContext)

    //create state to store if this product is already inthe basket
    const [inCart, setInCart] = useState(false)

    //determine if product is in the cart by usind find
    useEffect(
        () => {
            setInCart(cart?.find(item => item.id === product.id))
        }, [cart]
    )

    return (
        <div className='card-wrapper'>
            <Link to={`details/${product.id}`} className='card-container'>
                <img src={product.image} placeholder={product.title}></img>
                <h3>{product.title}</h3>
                <p>{product.category}</p>
                <h3>${parseFloat(product.price).toFixed(2)}</h3>
            </Link>
            {/* the heart icon will update and add the product to cart using context functions */}
            <div className='heart-container'>
                {
                    inCart?
                        <i className='heart-icon' onClick={()=>removeProduct(product.id)}><AiFillHeart style={{ color: "red" }} /></i>
                        :
                        <i className='heart-icon' onClick={()=>addProduct(product)}><AiOutlineHeart /></i>
                }
            </div>
        </div>
    )
}

export default Card