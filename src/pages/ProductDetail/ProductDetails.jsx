import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import axios from 'axios';
import { CartContext } from '../../context/CartContext';

function ProductDetails() {

    const { addProduct, cart, removeProduct } = useContext(CartContext)

    const { productid } = useParams()

    const [product, setProduct] = useState('');

    const [inCart, setInCart] = useState(false)

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

    useEffect(
        ()=>{
            setInCart(cart?.find(item => item.id === product.id))
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
                {
                    inCart?
                    <button onClick={() => removeProduct(product.id)}>Remove</button>
                    :
                    <button onClick={() => addProduct(product)}>Add to Cart</button>
                }
                
            </div>
        </div>
    )
}

export default ProductDetails