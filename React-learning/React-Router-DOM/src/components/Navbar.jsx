import React from 'react'
import logo from '../assets/Logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Product</li>
        <li>Contact</li>
      </ul>
      <button> Get Started </button>
    </nav>
  )
}

export default Navbar
