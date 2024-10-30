import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface ProjectCardProps{
    imageUrl:string;
    message:string; 
  
}


const ProjectCard: React.FC<ProjectCardProps>  = ({imageUrl,message}) => {

  return (
    <div className=' rounded-lg shadow-md p-4 flex flex-col items-center bg-black'>
        <Image src={imageUrl} alt='Project 1' width={400} height={300} />
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-2">
        {message}
      </button>
        
    </div>
  )
}

const ProjectCardContainer = ()=>{
    return(
      <div className='bg-custom-blue overflow-hidden '>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className='flex flex-col gap-4 cursor-pointer hover:scale-105 transition-all duration-300 p-4 md:p-10 md:pl-40 '>
          <Link href="https://github.com/omprakash987/nextjs_blog">
            <ProjectCard 
              imageUrl="/blog.png"
              message=" Next Blog"
            />
          </Link>
        </div>
        <div className='flex flex-col gap-4 cursor-pointer hover:scale-105 transition-all duration-300 p-4 md:p-10 md:pr-40'>
          <Link href="https://github.com/omprakash987/e-commerse-store">
            <ProjectCard 
              imageUrl="/e-commerse-store.png"
              message="E-commerse Store"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className='flex flex-col gap-4 cursor-pointer hover:scale-105 transition-all duration-300 p-4 md:p-10 md:pl-40'>
          <Link href="https://github.com/omprakash987/job-found">
            <ProjectCard 
              imageUrl="/jobfound.png"
              message="Job Found"
            />
          </Link>
        </div>
        <div className='flex flex-col gap-4 cursor-pointer hover:scale-105 transition-all duration-300 p-4 md:p-10 md:pr-40'>
          <Link href="https://github.com/omprakash987/next_blog">
            <ProjectCard 
              imageUrl="/blog.png"
              message="click here to see"
            />
          </Link>
        </div>
      </div>
    </div>

    )
}

export default ProjectCardContainer