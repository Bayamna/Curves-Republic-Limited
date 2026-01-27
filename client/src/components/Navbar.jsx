import React, { useState } from 'react';
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Logo from "../assets/logo.png"

const Navbar = () => {
    const [open, setOpen] = useState(false);

  return (
    <div>
        <nav className='backdrop-blur-md transition-all duration-300 shadow-md flex py-3 lg:py-5 lg:px-10 px-5 justify-between items-center text-lg fixed z-50 top-0 w-full'>
            <div className='flex justify-center items-center gap-2'>
                <img src={Logo} alt='logo' className=' w-[40px] h-[40px] lg: transform-none'/>
                <Link to="/"><h1 className='lg:text-lg text-sm text-brown hover:text-lightBrown font-gothicExpanded font-light' onClick={()=>setOpen(false)}>Curves Republic Ltd.</h1></Link>
            </div>
           
            <div className='hidden lg:flex justify-center items-center gap-6 font-light font-gothicExpanded lg:text-sm tracking-wide text-brown'>
                <Link to="/"><p className='hover:text-lightBrown'>Home</p></Link>
                <Link to="/about"><p className='hover:text-lightBrown'>About</p></Link>
                <Link to="/services"><p className='hover:text-lightBrown'>Services</p></Link>
                <Link to="/products"><p className='hover:text-lightBrown'>Products</p></Link>
            </div>

            <Link to="/booking" className='text-sm text-white bg-gradient-to-r from-brown to-lightBrown px-[24px] py-[9px] cursor-pointer rounded-md hidden lg:flex font-gothicExpanded tracking-wider'>Get Appointment</Link>

            {!open ? <HiOutlineMenuAlt3 className='text-3xl lg:hidden cursor-pointer hover:text-lightGold' onClick={()=>setOpen(true)}/>:<IoMdClose className='text-3xl lg:hidden cursor-pointer hover:text-lightGold' onClick={()=>setOpen(false)}/>}
        </nav>

        {open && <motion.div 
            initial={{opacity: 0, y: -40}}
            animate={{opacity: 1, y: 0 }}
            transition={{duration: 0.2, ease: "easeIn"}}
        
            className='flex flex-col justify-start items-start gap-4 bg-transparent backdrop-blur-md h-73 w-screen fixed px-14 py-10 text-md top-0 text-brown font-normal text-left mt-15 z-40 lg:hidden font-gothicExpanded tracking-wide'>
            <Link to="/"  onClick={()=>setOpen(false)}>Home</Link>
            <Link to="/about"  onClick={()=>setOpen(false)}>About</Link>
            <Link to="/services" onClick={()=>setOpen(false)}>Services</Link>
            <Link to="/products"  onClick={()=>setOpen(false)}>Products</Link>

            <div className="mt-4">
                <Link to='/booking' className='text-sm text-white bg-gradient-to-r from-brown to-lightBrown px-4 py-2 cursor-pointer rounded-lg tracking-widest font-light' onClick={()=>setOpen(false)}>Get Appointment</Link>
            </div>
            
        </motion.div>}
       
    </div>
  )
}

export default Navbar;
