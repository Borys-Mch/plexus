import { useState } from 'react';
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants';

export const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav id='home' className="w-full flex py-6 justify-between items-center relative">
      <img src={logo} alt="logo" className='w-[125px] h-[61px]'/>
      <div className="flex flex-1 justify-end items-center">
        <h2 className='sm:flex hidden pr-[77px] text-white'>Get in touch</h2>
        <img 
          src={toggle ? close : menu } 
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={()  =>  setToggle((prev) => !prev)} 
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gray-700 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul>
            {navLinks.map((nav, index) => (
              <li 
                key={nav.id} 
                className={`
                  font-poppins 
                  font-normal 
                  cursor-pointer 
                  text-[16px] 
                  ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} 
                  text-white
                `}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
