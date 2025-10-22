import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [open, setOpen] = useState(false);

  return (
    <div>
        <nav className='bg-gradient-to-r z-999 from-brown to-lightBrown text-white flex py-7 px-10 justify-between items-center text-lg fixed top-0 w-screen '>
            <Link to="/"><h1 className='text-xl font-bold text-white hover:text-lightGold' onClick={()=>setOpen(false)}>Curves Republic Ltd.</h1></Link>
            <button className='text-[16px] text-brown font-bold bg-gradient-to-r from-gold to-lightGold px-[24px] py-[9px] cursor-pointer rounded-lg hidden lg:flex'>
                <Link to="/booking"><p>Book Us Today!</p></Link>
            </button>
            <div className='hidden lg:flex justify-center items-center gap-4 font-bold'>
                <Link to="/"><p className='hover:text-lightGold'>Home</p></Link>
                <Link to="/about"><p className='hover:text-lightGold'>About</p></Link>
                <Link to="/services"><p className='hover:text-lightGold'>Services</p></Link>
                <Link to="/products"><p className='hover:text-lightGold'>Products</p></Link>
            </div>
            {!open ? <GiHamburgerMenu className='text-2xl lg:hidden cursor-pointer' onClick={()=>setOpen(true)}/>:<IoMdClose className='text-3xl lg:hidden cursor-pointer' onClick={()=>setOpen(false)}/>}
        </nav>
        {open ?  <div className='flex-row gap-6 bg-brown h-screen w-screen fixed p-14 text-lg top-0 text-white text-center mt-[4rem] z-998 lg:hidden'>
            <Link to="/"><p className='hover:text-gold' onClick={()=>setOpen(false)}>Home</p></Link>
            <Link to="/about"><p className='hover:text-gold' onClick={()=>setOpen(false)}>About</p></Link>
            <Link to="/services"><p className='hover:text-gold' onClick={()=>setOpen(false)}>Services</p></Link>
            <Link to="/products"><p className='hover:text-gold' onClick={()=>setOpen(false)}>Products</p></Link>
            <button className='text-[16px] text-brown bg-gradient-to-r from-gold to-lightGold px-[24px] py-[9px] cursor-pointer rounded-lg mt-6'>
                <a href='/booking' className='font-bold'>Book Us Today!</a>
            </button>
        </div>: null}
       
    </div>
  )
}

export default Navbar;
