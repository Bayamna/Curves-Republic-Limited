import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandTiktokFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='w-full p-4 lg:p-10 bg-gold'>
      <footer className='text-lightBrown flex-col lg:justify-center lg:items-center gap-7'>
   
        <div className='flex-col justify-center items-center gap-1 mt-2 lg:mt-0'>

          <form className='text-center flex-col justify-center items-center gap-4  mb-4 lg:w-[40%] w-[90%] mx-auto'>
            <h1 className='text-5xl font-black tracking-tight mb-4'>Get Newsletter</h1>
            <input type='text' id="newsLetter" placeholder='Enter Your Email' autoComplete='off'
            className='bg-lightGold p-3 w-full border-0 outline-0 mb-2 rounded-sm'/>
            <button className='text-white bg-lightBrown w-[50%] py-2 rounded-sm cursor-pointer'>Submit</button>
          </form>

          <div className='flex justify-center items-center gap-1 mt-2 lg:mt-0'>
            <a href='/'><FaFacebook className='text-3xl cursor-pointer hover:text-brown'/></a>
            <a href=''><SiYoutubemusic className='text-3xl cursor-pointer hover:text-brown'/></a>
            <a href=''><TbBrandTiktokFilled className='text-3xl cursor-pointer hover:text-brown'/></a>
            <a href=''><AiFillInstagram className='text-3xl cursor-pointer hover:text-brown'/></a>
          </div>

        </div>
        <p className='font-medium text-center'>Copyright © {new Date().getFullYear()}, Curves Republic Ltd.</p>
      </footer>
    </div>
  )
}

export default Footer
