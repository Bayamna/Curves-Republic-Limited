import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";;
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='w-full p-4 lg:p-10 bg-gold'>
      <footer className='text-lightBrown flex-col lg:justify-center lg:items-center gap-7'>
   
        <div className='flex-col justify-center items-center gap-1 mt-5 lg:mt-0'>

          <form className='text-center flex-col justify-center items-center gap-4  mb-4 lg:w-[50%] w-[90%] mx-auto'>
            <h1 className='text-3xl lg:text-5xl font-gothicExpanded tracking-wide font-black'>Get Newsletter</h1>
            <p className='mb-2 font-medium tracking-tight leading-tight'>Be the first to receive price, promos and new products updates.</p>
            <input type='text' id="newsLetter" placeholder='Enter Your Email' autoComplete='off'
            className='bg-lightGold p-3 w-full border-0 outline-0 mb-2 rounded-sm'/>
            <button className='text-gold text-sm lg:text-lg bg-gradient-to-r from-brown to-lightBrown w-[50%] py-2 rounded-sm cursor-pointer font-gothicExpanded tracking-wider'>Subscribe</button>
          </form>

          <div className='flex justify-center items-center gap-1 mt-2 lg:mt-0 mb-1'>
            <a href='https://www.facebook.com/share/1DTxoo83TK/'><FaSquareFacebook className='text-xl lg:text-2xl cursor-pointer hover:text-brown'/></a>
            <a href='https://www.youtube.com/@curvesrepublicltd'><FaYoutubeSquare className='text-xl lg:text-2xl cursor-pointer hover:text-brown'/></a>
            <a href='https://www.tiktok.com/@curvesrepublicltd?_r=1&_t=ZS-93JyUklGKpk'><AiFillTikTok className='text-2xl lg:text-3xl cursor-pointer hover:text-brown'/></a>
            <a href='https://www.instagram.com/curvesrepublicltd?utm_source=qr&igsh=MTlvdmhycWpnZW8yZQ=='><AiFillInstagram className='text-2xl lg:text-3xl cursor-pointer hover:text-brown'/></a>
          </div>

        </div>
        <p className='font-medium text-center text-sm lg:text-md mb-5 lg:mb-0'>Copyright © {new Date().getFullYear()}, Curves Republic Ltd.</p>
      </footer>
    </div>
  )
}

export default Footer
