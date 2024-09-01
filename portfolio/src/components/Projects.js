import React from 'react'
import blog from '../asserts/blog.jpg'
import weather from '../asserts/weather.jpeg'



export default function Projects() {
    const config ={
        projects:[
            {
                image:blog,
                description:' Blog website built with MERN stack',
                link:'https://github.com/Divyapunitharaju/blog.git'
            },
            {
                image:weather,
                description:' Blog website built with MERN stack',
                link:'https://github.com/Divyapunitharaju/weather.git'
            },
        ]
    } 
  return (
    <section className='flex flex-col py-20 px-5 justify-center bg-secondary' id='projects'>
        <div className='w-1/2'>
        <div className='flex justify-center'>
        <h1 className='text-4xl border-b-4 mb-5 w-[145px] font-bold text-black'>Projects</h1>
        </div>
        </div>
        <div className='w-full '>
        <div className='flex flex-col md:flex-row px-10 gap-5'>
            {config.projects.map((project)=>(
               <div className='relative'>
               <img className='h-[200px] w-[500px]' src={project.image} />
               <div className='project'>
                 <p className='text-center px-5 py-5'>{project.description} </p>
                 <div className='flex justify-center'>
                 <a href={project.link} className='hover:bg-white hover:text-black font-bold box-border bg-black text-white px-5 py-2 border-2 rounded '>View Project</a>
               </div>
               </div>
               
              </div>
              
            ))}
           
        </div>   
        </div>
    </section>
  )
}
