import React, { useState, useEffect } from 'react'
import './Homepage.css'
import axios from 'axios'
import Card from '../../components/Card/Card'
import Filter from '../../components/Filter/Filter'

function Homepage() {

    const [products, setProducts] = useState([])

    //load all products on page load by using empy array in useEffect []
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    //pass setProducts state into the Filter component
    return (
        <div className='homepage-container'>
            <Filter setProducts={setProducts}/>
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