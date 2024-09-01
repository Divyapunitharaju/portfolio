import React from 'react'
import Girl from '../asserts/Divya.jpeg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';

export default function Hero() {
   const config ={
   link:'https://drive.google.com/file/d/1ek8m5HhbvIpoAeG9SO0g7voNI_emat9U/view?usp=drivesdk',
   social:{
    linkedin:'https://www.linkedin.com/in/divyapunitaharaju/',
    git:'https://github.com/Divyapunitharaju'
   }
    
   
  }

  return <section className='flex flex-col-reverse md:flex-row px-5 py-10 bg-secondary justify-center' id='hero'> 
    <div className='md:w-1/2 flex flex-col justify-center'>
    <h1 className=' w:1/2 flex flex-col items-center text-4xl font-hero-font font-bold '>
       Divya<br/>
      <p className=' text-xl font-hero-font'>Full Stack Developer</p>
    </h1>

    <div className='flex py-8 justify-center '>
        <a href={config.social.linkedin} className='pr-10 hover:text-black text-peacock-green '><FaLinkedin size={30}/></a> 
        <a href={config.social.git} className='pr-10 hover:text-black text-peacock-green'><FaGithub size={30}/></a> 
        <a href={config.link} className='hover:bg-white hover:text-black font-bold box-border bg-peacock-green text-white px-5 py-1  border-2 rounded'>Resume</a>
    </div>
    </div>
    <div className='md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0 image'>
   <img 
    className='w-[min(20rem,90%)]  object-cover' 
    src={Girl} 
    alt='Divya' 
   />
</div>
    
  </section>
}
