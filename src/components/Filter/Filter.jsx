//this component will filter the page based on product categories and an axios api call

import React, { useState, useEffect } from 'react'
import './Filter.css'
import axios from 'axios';
import FilterButton from '../FilterButton/FilterButton';

function Filter({ setProducts }) {

  //create state to manage categories
  const [category, setCategory] = useState([]);

  //initial axios call to get all possible categories
  axios.get('https://fakestoreapi.com/products/categories')
    .then(res => {
      const categories = capitalizeArray(res.data)
      setCategory(categories)
    })
    .catch(err => console.log(err)
  )

  //function to capitalize categories
  function capitalizeArray(arr) {
    const capitalizedArray = arr.map((string) => {
      return string
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    });

    return capitalizedArray;
  }

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
      <FilterButton key={0} item="All" filterResults={filterResults} />
      {category.map((item, index) => (
        <FilterButton
          key={index + 1}
          item={item}
          filterResults={filterResults} />
      ))}
    </div>
  )
}

export default Filter