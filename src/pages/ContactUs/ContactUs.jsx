import React from 'react'
import './ContactUs.css'

function ContactUs() {
    return (
        <div className='contact-container'>
            <h1>Contact Us</h1>
            <form>
                <input type='text' placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
                <textarea className='message-input' placeholder='Write your message here'></textarea>
                <button className='submit-button'>Submit</button>
            </form>
        </div>
    )
}

export default ContactUs