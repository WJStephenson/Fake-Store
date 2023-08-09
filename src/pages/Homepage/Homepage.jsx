import React, { useState, useEffect } from 'react'
import './Homepage.css'
import axios from 'axios'
import Card from '../../components/Card/Card'

function Homepage() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='homepage-container'>
            <div className='product-container'>
                {products.map(item => ( <Card 
                    key={item.id} 
                    product={item} 
                /> ))}
            </div>
        </div>
    )
}

export default Homepage