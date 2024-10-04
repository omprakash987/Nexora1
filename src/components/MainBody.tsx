"use client"

import React from 'react';
import ProjectCardContainer from './ProjectCard';
import { Typewriter } from 'react-simple-typewriter';


const MainBody = () => {
  return (
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
      <p className='text-white text-center text-4xl p-10 '>
        I am a full stack developer and a freelancer
        <br />
        I love to build websites and web applications
      </p>

      <ProjectCardContainer  />
    </div>
  );
};

export default MainBody;
