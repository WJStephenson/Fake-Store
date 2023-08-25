import React, { useContext, useEffect, useState } from 'react'
import './Card.css'
import axios from 'axios'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

function Card({ product }) {

    const { cart, addProduct, removeProduct } = useContext(CartContext)

    const [inBasket, setInBasket] = useState(false)

    useEffect(
        () => {
            setInBasket(cart?.find(item => item.id === product.id))
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

            <div className='heart-container'>
                {
                    inBasket?
                        <i className='heart-icon' onClick={()=>removeProduct(product.id)}><AiFillHeart style={{ color: "red" }} /></i>
                        :
                        <i className='heart-icon' onClick={()=>addProduct(product)}><AiOutlineHeart /></i>
                }
            </div>
        </div>
    )
}

export default Card