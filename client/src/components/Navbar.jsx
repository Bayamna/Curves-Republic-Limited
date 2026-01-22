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
        <nav className='bg-gradient-to-r z-999 from-brown to-lightBrown text-white flex py-3 lg:py-5 lg:px-10 px-5 justify-between items-center text-lg fixed top-0 w-screen'>
            <div className='flex justify-center items-center gap-2'>
                <img src={Logo} alt='logo' className=' w-[40px] h-[40px] lg: transform-none'/>
                <Link to="/"><h1 className='lg:text-lg text-sm text-white hover:text-lightGold font-gothicExpanded font-light' onClick={()=>setOpen(false)}>Curves Republic Ltd.</h1></Link>
            </div>
           
            <div className='hidden lg:flex justify-center items-center gap-6 font-light font-gothicExpanded lg:text-sm tracking-wide'>
                <Link to="/"><p className='hover:text-lightGold'>Home</p></Link>
                <Link to="/about"><p className='hover:text-lightGold'>About</p></Link>
                <Link to="/services"><p className='hover:text-lightGold'>Services</p></Link>
                <Link to="/products"><p className='hover:text-lightGold'>Products</p></Link>
            </div>

            <Link to="/booking" className='text-sm text-brown bg-white px-[24px] py-[9px] cursor-pointer rounded-lg hidden lg:flex font-gothicExpanded tracking-wide'>GET APPOINTMENT</Link>

            {!open ? <HiOutlineMenuAlt3 className='text-3xl lg:hidden cursor-pointer hover:text-lightGold' onClick={()=>setOpen(true)}/>:<IoMdClose className='text-3xl lg:hidden cursor-pointer hover:text-lightGold' onClick={()=>setOpen(false)}/>}
        </nav>

        {open && <motion.div 
            initial={{opacity: 0, y: -60}}
            animate={{opacity: 1, y: 0 }}
            transition={{duration: 0.2, ease: "easeIn"}}
        
            className='flex flex-col justify-start items-start gap-5 bg-brown h-screen w-screen fixed p-14 text-lg top-0 text-white font-normal text-left mt-[4rem] z-998 lg:hidden font-gothicExpanded tracking-wide'>
            <Link to="/" className='hover:text-gold' onClick={()=>setOpen(false)}>Home</Link>
            <Link to="/about" className='hover:text-gold' onClick={()=>setOpen(false)}>About</Link>
            <Link to="/services"className='hover:text-gold' onClick={()=>setOpen(false)}>Services</Link>
            <Link to="/products" className='hover:text-gold' onClick={()=>setOpen(false)}>Products</Link>
            <div className='border-t border-lightBrown'>
                <button className='text-[14px] text-brown bg-white font-bold px-[24px] py-[9px] cursor-pointer rounded-lg mt-3'>
                    <Link to='/booking' onClick={()=>setOpen(false)}>GET APPOINTMENT</Link>
                </button>
            </div>
            
        </motion.div>}
       
    </div>
  )
}

export default Navbar;
