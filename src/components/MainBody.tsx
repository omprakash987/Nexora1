"use client"

import React from 'react';
import ProjectCardContainer from './ProjectCard';
import { Typewriter } from 'react-simple-typewriter';
import Reviews from './Reviews';
import { AppleCardsCarouselDemo } from './Services';


const MainBody = () => {
  return (
    <div className='h-screen bg-background bg-custom-blue '>
      <h1 className='text-white text-center text-6xl font-bold p-10 gradient-text animate-slideDown'>
        <span className='bg-gradient-to-r from-blue-900 to-blue-300 text-transparent bg-clip-text'>
      <Typewriter
          words={["NEXORA"]}
          loop={false}
          cursor
          cursorStyle='_'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
          
        />

</span>
      </h1>
      <p className='text-white text-center text-4xl p-10 animate-slideDown '>
      We make
Websites
for Early Stage startup
</p>

        <p className=' text-blue-500 text-center text-4xl p-10 animated-slidDown'>Driving Business Growth and Maximizing
          <br />
          Profits with Strategic Digital Marketing.
           </p>
       
        

     

      {/* <ProjectCardContainer  /> */}
      <AppleCardsCarouselDemo/>
      <br />
      
    <Reviews/>
    
    
      
    </div>
  );
};





export default MainBody;
