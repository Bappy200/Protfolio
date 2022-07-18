import React from 'react'
import './NavBar.scss'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState } from 'react';
function NavBar() {
  const menuItems = ['home', 'about', 'work', 'skills', 'contact'];
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__nav'>
        <div className='app__nav-img'>
            <span style={{textTransform: 'uppercase',fontSize: '18px'}}>sajjaudl</span>
        </div>
        <ul className='app__nav-links'>
            {
              menuItems.map(item=> (
                <li key={`menu-${item}`}>
                  <div/>
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))
            }
        </ul>
        <div className='app__nav-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          
           {
            toggle && <>
            <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
               <HiX onClick={() => setToggle(false)} />
                <ul>
                    {
                      menuItems.map(item=> (
                        <li key={`menu-${item}`}>
                          <a onClick={()=> setToggle(false)} href={`#${item}`}>{item}</a>
                        </li>
                      ))
                    }
                </ul>
                </motion.div>
            </>
           }

        </div>
    </nav>
  )
}

export default NavBar