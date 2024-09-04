import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <ul className='footer-ul'>
        <li><a href="/">Home</a></li>
        <li><a href="/">Profile</a></li>
        <li><a href="/postrecipe">Category</a></li>
        <li><a href="/ContactUs">ContactUs</a></li>
        <li><a href="/privacy">Privacy & Policy</a></li>
      </ul>
      <br></br>
      <div>
        <h5>Copyright&copy; 2023 ShareRippy</h5>
      </div>
    </div>
  );
}

export default Footer;