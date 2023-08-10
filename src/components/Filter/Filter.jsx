import React, { useState, useEffect } from 'react'
import './Filter.css'
import axios from 'axios';

function Filter({ setProducts }) {

  //set up state to store the button clicked
  const [filter, setFilter] = useState('');

  // Use useEffect to perform API call when filter changes
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products${filter}`)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }, [filter, setProducts]);

  //change filter based on value of button clicked
  const filterResults = (e) => {
    if (e.target.value !== 'all') {
      setFilter(`/category/${e.target.value}`);
    } else {
      setFilter('');
    }
  };

  return (
    <div className='filter-container'>
      <button value="all" onClick={filterResults}>All</button>
      <button value="electronics" onClick={filterResults}>Electronics</button>
      <button value="jewelery" onClick={filterResults}>Jewelery</button>
      <button value="men's clothing" onClick={filterResults}>Men's Clothing</button>
      <button value="women's clothing" onClick={filterResults}>Women's Clothing</button>
    </div>
  )
}

export default Filter