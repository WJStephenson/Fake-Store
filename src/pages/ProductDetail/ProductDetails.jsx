import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import axios from 'axios';

function ProductDetails() {

    const { productid } = useParams()

    const [product, setProduct] = useState('');

    useEffect(
        () => {
            axios.get(`https://fakestoreapi.com/products/${productid}`)
                .then(res => {
                    console.log(res)
                    setProduct(res.data)
                })
                .catch(err => console.log(err))
        }, []
    )

    return (
        <div className='detail-container'>
            <img src={product.image} placeholder={product.title}></img>
            <div className='product-detail'>
                <h3>{product.title}</h3>
                <h3>${product.price}</h3>
                <h4>Description</h4>
                <p>{product.description}</p>
                <button>Add to Cart</button>
            </div>

        </div>
    )
}

export default ProductDetails