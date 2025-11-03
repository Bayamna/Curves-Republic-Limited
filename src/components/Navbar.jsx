import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Logo from "../assets/logo.png"

const Navbar = () => {
    const [open, setOpen] = useState(false);

  return (
    <div>
        <nav className='bg-gradient-to-r z-999 from-brown to-lightBrown text-white flex py-4 lg:py-7 lg:px-10 px-8 justify-between items-center text-lg fixed top-0 w-screen'>
            <div className='flex justify-center items-center gap-2'>
                <img src={Logo} alt='logo' className=' w-[45px] h-[45px] transform-none'/>
                <Link to="/"><h1 className='lg:text-xl text-lg font-bold text-white hover:text-lightGold' onClick={()=>setOpen(false)}>Curves Republic Ltd.</h1></Link>
            </div>
            <button className='text-[16px] text-brown font-bold bg-white px-[24px] py-[9px] cursor-pointer rounded-lg hidden lg:flex'>
                <Link to="/booking"><p>Let's Book You Today</p></Link>
            </button>
            <div className='hidden lg:flex justify-center items-center gap-4 font-bold'>
                <Link to="/"><p className='hover:text-lightGold'>Home</p></Link>
                <Link to="/about"><p className='hover:text-lightGold'>About</p></Link>
                <Link to="/services"><p className='hover:text-lightGold'>Services</p></Link>
                <Link to="/products"><p className='hover:text-lightGold'>Products</p></Link>
            </div>
            {!open ? <GiHamburgerMenu className='text-2xl lg:hidden cursor-pointer hover:text-lightGold' onClick={()=>setOpen(true)}/>:<IoMdClose className='text-3xl lg:hidden cursor-pointer hover:text-lightGold' onClick={()=>setOpen(false)}/>}
        </nav>
        {open ?  <div className='gap-10 bg-brown h-screen w-screen fixed p-14 text-lg top-0 text-white font-bold text-center mt-[4rem] z-998 lg:hidden'>
            <Link to="/"><p className='hover:text-gold' onClick={()=>setOpen(false)}>Home</p></Link>
            <Link to="/about"><p className='hover:text-gold' onClick={()=>setOpen(false)}>About</p></Link>
            <Link to="/services"><p className='hover:text-gold' onClick={()=>setOpen(false)}>Services</p></Link>
            <Link to="/products"><p className='hover:text-gold' onClick={()=>setOpen(false)}>Products</p></Link>
            <button className='text-[16px] text-brown bg-white font-bold px-[24px] py-[9px] cursor-pointer rounded-lg mt-6'>
                <a href='/booking'>Let's Book You Today</a>
            </button>
        </div>: null}
       
    </div>
  )
}

export default Navbar;
