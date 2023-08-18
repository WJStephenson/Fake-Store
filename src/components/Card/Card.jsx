import React from 'react'
import './Card.css'
import axios from 'axios'
import {AiOutlineHeart as Heart} from 'react-icons/ai'

function Card({ product }) {

    return (
        <div className='card-container' onClick={() => location.href = `details/${product.id}`}>
            <img src={product.image} placeholder={product.title}></img>
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <h3>${product.price}</h3>
            <div className='heart-container'>
                <i className='heart-icon'><Heart /></i>
            </div>
            
        </div>
    )
}

export default Card