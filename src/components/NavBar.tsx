import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className=' bg-custom-purple h-16 animate-slideDown'>
        <ul className='flex justify-end items-center h-full '>
          <Link href="/"><li className=' text-white mx-10 cursor-pointer'>Home</li></Link>
          <Link href="/about"><li className='text-white mx-10 cursor-pointer'>About</li></Link>
          <Link href="/contect"><li className='text-white mx-10 cursor-pointer'>contect</li></Link>
        </ul>
    </div>
  )
}

export default NavBar
