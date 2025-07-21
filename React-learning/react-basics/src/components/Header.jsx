
//  link is used when u dont want the page to reload again and again when switching the pages..
//  if u want to reload the page then u can use <a> tag

import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex items-center justify-between text-white p-7 bg-emerald-950">
        <h1 className="text-3xl font-bold text-white">Siara</h1>
    

    <div className='flex items-center gap-10 text-lg text-white underline'>
          <Link className='text-xl underline' to="/footer"> Footer</Link>
          <Link className='text-xl underline' to="/form"> Form</Link>
        
        {/* <a className='text-xl underline' href="/number"> Number</a>
        <a className='text-xl underline' href="/form"> Form</a>
        <a className='text-xl underline' href="/footer"> Fotter</a> */}
    </div>

   </div>
  )
}

export default Header