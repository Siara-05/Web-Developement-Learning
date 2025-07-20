import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-10 py-5 bg-emerald-950'>
        <h2 className='text-3xl'>Siara</h2>
        <div className='flex items-center gap-8'>
            <h4 className='items-center text-xl'>Home</h4>
            <h4 className='items-center text-xl'>About</h4>
            <h4 className='items-center text-xl'>Services</h4>
            <h4 className='items-center text-xl'>Contact us</h4>
         </div>
    </nav>
  )
}

export default Navbar