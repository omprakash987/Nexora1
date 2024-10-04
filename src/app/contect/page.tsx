'use client'




import ContactForm from '@/components/ContactForm'
import NavBar from '@/components/NavBar'
import React from 'react'

const page = () => {
  return (
    <div className=' bg-custom-blue h-screen animate-slideDown'>
        <NavBar/>
        <div className="container mx-auto mt-8 p-4 flex flex-col justify-center items-center ">
        <h1 className='text-4xl font-bold text-white'>Contact Us</h1>
      <ContactForm />
    </div>
    </div>
  )
}

export default page