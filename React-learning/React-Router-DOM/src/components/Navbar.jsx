import React from 'react'
import logo from '../assets/Logo.png'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <Link to='/'> <li>Home</li> </Link>
        <Link to='/about'> <li>About</li> </Link>
        <Link to='product/'> <li>Product</li> </Link>
        <Link to='/contact'> <li>Contact</li> </Link>
      </ul>
      <button> Get Started </button>
    </nav>
  )
}

export default Navbar
