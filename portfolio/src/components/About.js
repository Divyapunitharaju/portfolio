import React from 'react'
import about from '../asserts/about.png'

export default function About() {
  return (
    <section id='about'className='flex flex-col md:flex-row px-5 py-5  justify-center' >
      <div className='md:w-1/2 py-5 flex justify-center'>
        <img className='ml-2' src={about} />
      </div>
      <div className='md:w-1/2 flex justify-start'>
      <div className='flex flex-col justify-center  text-black text-justify'>
      <h1 className='text-4xl border-b-4 mb-5 w-[170px] font-bold '>About Me</h1>
        <p className='pb-5'>
        I’m Divya, a passionate and driven Full Stack Developer with a B.Sc. in Computer Science from Kongunadu Arts and Science College. I’ve recently completed an intensive Full Stack Developer (MERN) course at Imarticus Learning, where I refined my skills in modern web development technologies.
        </p>
        <p className='pb-5'>
        I have hands-on experience with Java, HTML, CSS, JavaScript, and advanced frameworks like React, Node.js, and Express.js. I’ve built dynamic applications, including a MERN stack blog app and a weather application powered by OpenWeatherAPI and Geonames, which have deepened my expertise in building end-to-end solutions.
        </p>
        <p className='pb-5'>
        I thrive on solving complex problems and enjoy bringing ideas to life through code. I’m always eager to take on new challenges and collaborate on innovative projects that make a difference.
        </p>
      </div>
      </div>
        
    </section>
  )
}
