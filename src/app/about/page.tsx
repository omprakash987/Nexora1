"use client"
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import NavBar from '@/components/NavBar'
import Link from 'next/link'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const page = () => {
  return (
    <div>
      <NavBar/>

      <div className='h-screen bg-background bg-custom-blue animate-slideDown'>
      <h1 className='text-white text-center text-6xl font-bold p-10 gradient-text'>
      <Typewriter
          words={["Hi, I am  omprakash"]}
          loop={false}
          cursor
          cursorStyle='_'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
          
        />
      </h1>
      <p className='text-white text-center text-2xl p-10'>
      Hi, I am Omprakash, a passionate Full Stack Developer and freelancer. <br />
       With a strong foundation in both front-end and back-end development,
       <br />
        I love creating efficient, scalable web applications that provide seamless user experiences.
        <br />
         My expertise spans across modern technologies like React, Next.js, Node.js,
         <br /> and more, allowing me to tackle complex projects with confidence.
      </p>
      <div className='flex justify-center'>
        <a href="/resume.pdf.pdf" download="Omprakash_Resume.pdf" className='bg-custom-purple text-white px-4 py-2 rounded-md'>
          Resume
        </a>
      </div>
      <div className=" flex justify-center gap-4 text-4xl text-white mt-10 ">
      <Link href="mailto:kanuparewa371@gmail.com">
      <SiGmail className=" cursor-pointer" />
      </Link>
      <Link href="https://www.linkedin.com/in/omprakash-parewa-29815a257/">
      <FaLinkedin className=" cursor-pointer" />
      </Link>
      
      <Link href="https://github.com/omprakash987">
      <FaGithub className=" cursor-pointer" />
      </Link>
      </div>
    </div>
    </div>
  )
}

export default page