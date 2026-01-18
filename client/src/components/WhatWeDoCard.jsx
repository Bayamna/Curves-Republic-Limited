import React from 'react';
import {motion} from "framer-motion";
import WhatsAppBtn from './WhatsAppBtn';

const WhatWeDoCard = ({title, description, image, message}) => {
  return (
    <motion.div 
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1, ease: "easeOut"}}
      viewport={{ once: true, amount: 0.5 }}

      className='bg-gray-200/10 p-4 lg:p-10 rounded-xl lg:mb-1 mb-0 drop-shadow-lg drop-shadow-gray-200 border border-gray-400 cursor-pointer'>
      <img src={image} className='mb-5 mt-3 rounded-lg'/>
      <h1 className='text-lightBrown font-bold text-2xl lg:text-3xl leading-tight'>{title}</h1>
      <p className='text-gray-600 text-md font-normal lg:text-lg mt-2 mb-5 leading-normal tracking-tight '>{description}</p>
      <WhatsAppBtn message={message}/>
    </motion.div>
  )
}

export default WhatWeDoCard;
