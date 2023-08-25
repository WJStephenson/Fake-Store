//this component returns the page footer

import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

//the footer provides a link to the contact page
function Footer() {
  return (
    <div className='footer-container'>
        <p>Made with love by Jo Stephenson</p>
        <Link to={"/contactus"}>Contact Us</Link>
    </div>
  )
}

export default Footer