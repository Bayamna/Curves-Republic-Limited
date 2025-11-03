import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandTiktokFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='w-full p-4 lg:p-10 bg-gold'>
      <footer className='text-lightBrown lg:flex lg:justify-center lg:items-center gap-7'>
        <p className='font-medium flex justify-center items-center'>Copyright © {new Date().getFullYear()}, Curves Republic Ltd.</p>

        <div className='flex justify-center items-center gap-1 mt-2 lg:mt-0'>
            <a href='/'><FaFacebook className='text-2xl cursor-pointer hover:text-brown'/></a>
            <a href=''><SiYoutubemusic className='text-2xl cursor-pointer hover:text-brown'/></a>
            <a href=''><TbBrandTiktokFilled className='text-2xl cursor-pointer hover:text-brown'/></a>
            <a href=''><AiFillInstagram className='text-3xl cursor-pointer hover:text-brown'/></a>
            <p className='font-medium'>curvesrepublicltd.</p>
        </div>

      </footer>
    </div>
  )
}

export default Footer
