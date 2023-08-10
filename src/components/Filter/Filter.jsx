import React, { useState, useEffect } from 'react'
import './Filter.css'
import axios from 'axios';
import FilterButton from '../FilterButton/FilterButton';

function Filter({ setProducts }) {

  const buttons = ["All", "Electronics", "Jewelery", "Men's Clothing", "Women's Clothing"]

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
      {buttons.map((item, index) => (
        <FilterButton
          key={index}
          item={item}
          filterResults={filterResults}/>
      ))}
    </div>
  )
}

export default Filter