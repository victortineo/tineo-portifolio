import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import './sidebar.css'

export const Sidebar = ({ open = true}) => (
  <nav className={`w-80 bg-mainPurple h-full transition-all ease-in-out duration-150 p-5 fixed z-50 ${open ? 'left-0' : '-left-80'}`}>
    <div>
      <div className='bg-white p-4 flex flex-col items-center mt-14 mb-14'>
        <div className='h-32 w-32 rounded-full p-3 bg-mainYellow -mt-14'>
          <StaticImage src="../../images/me-pixel-art.png" objectPosition={'0px 12px'} objectFit="none" width={100} className='h-28' alt="me" />
        </div>
        <div className='flex flex-col w-full'>
          <p className=''>Victor Tineo</p>
          <span>Frontend Developer</span>
          <a href="//linkedin.com/in/victortineo" rel="noopener noreferrer" target="_blank"><span className='icon icon-linkedin mr-2'/>Linkedin</a>
          <a href="//github.com/victortineo" rel="noopener noreferrer" target="_blank"><span className='icon icon-github mr-2'/>Github</a>
        </div>
      </div>
    </div>
    <ul>
      <li className='text-mainYellow'><Link className='text-white font-semiBold no-underline hover:font-bold hover:underline' activeClassName="font-bold !underline" to='/'>Home</Link></li>
      <li className='text-mainYellow'><Link className='text-white font-semiBold no-underline hover:font-bold hover:underline' activeClassName="font-bold !underline" to='/info'>About me</Link></li>
      <li className='text-mainYellow'><Link className='text-white font-semiBold no-underline hover:font-bold hover:underline' activeClassName="font-bold !underline" to='/projects'>Projects</Link></li>
      <li className='text-mainYellow'><Link className='text-white font-semiBold no-underline hover:font-bold hover:underline' activeClassName="font-bold !underline" to='/resume'>Resume</Link></li>
    </ul>
  </nav>
) 