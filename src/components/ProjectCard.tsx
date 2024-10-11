import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface ProjectCardProps{
    imageUrl:string;
    message:string; 
  
}


const ProjectCard: React.FC<ProjectCardProps>  = ({imageUrl,message}) => {

  return (
    <div className=' bg-white rounded-lg shadow-md p-4 flex flex-col items-center'>
        <Image src={imageUrl} alt='Project 1' width={400} height={300} />
        <p className=' text-2xl font bold text-center'>{message}</p>
        
    </div>
  )
}

const ProjectCardContainer = ()=>{
    return(
      <div className='bg-custom-blue overflow-hidden '>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className='flex flex-col gap-4 cursor-pointer hover:scale-105 transition-all duration-300 p-4 md:p-10 md:pl-40'>
          <Link href="https://github.com/omprakash987/nextblog">
            <ProjectCard 
              imageUrl="/blog.png"
              message="Click to veiw"
            />
          </Link>
        </div>
        <div className='flex flex-col gap-4 cursor-pointer hover:scale-105 transition-all duration-300 p-4 md:p-10 md:pr-40'>
          <Link href="https://github.com/omprakash987/e-commerse-store">
            <ProjectCard 
              imageUrl="/e-commerse-store.png"
              message="click to view"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className='flex flex-col gap-4 cursor-pointer hover:scale-105 transition-all duration-300 p-4 md:p-10 md:pl-40'>
          <Link href="https://github.com/omprakash987">
            <ProjectCard 
              imageUrl="/blog.png"
              message="click here to see"
            />
          </Link>
        </div>
        <div className='flex flex-col gap-4 cursor-pointer hover:scale-105 transition-all duration-300 p-4 md:p-10 md:pr-40'>
          <Link href="https://github.com/omprakash987">
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