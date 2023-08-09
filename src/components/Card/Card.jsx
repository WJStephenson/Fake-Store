import React from 'react'
import './Card.css'
import axios from 'axios'

function Card({product}) {

    return (
        <div className='card-container'>
            <img src={product.image} placeholder={product.title}></img>
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <h3>${product.price}</h3>
        </div>
    )
}

export default Card