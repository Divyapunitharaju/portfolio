import React, { useState } from 'react'
import { Bars3Icon} from '@heroicons/react/24/solid'



export default function Header() {
 const [toggle,setToggle]=useState(false)

  return (
    <header className='flex justify-between px-5 py-3 bg-grey'>
        <a  className="font-bold text-peacock-green" href='#'>Divya</a>
        <nav className='hidden md:block'>
        <ul className='flex text-black'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contacts</a></li>  
        </ul>
        </nav>
        {toggle && <nav className='block md:hidden '>
        <ul onClick={()=>setToggle(!toggle)} className='flex flex-col mobile-nav bg-white  h-1/2'>
            <li><a href='/'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contacts</a></li>  
        </ul>
        
        </nav>}
        <button className='block md:hidden' onClick={()=>setToggle(!toggle)}><Bars3Icon className='text-voilet-800 h-8' /></button>
    </header>
  )
}
