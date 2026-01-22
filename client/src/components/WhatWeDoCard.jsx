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

      className='bg-gray-200/25 mt-5 rounded-sm drop-shadow-lg  drop-shadow-gray-200 cursor-pointer grid lg:grid-cols-2 md:grid-cols-2 justify-center items-center lg:gap-10 gap-2 lg:w-[90%] w-full mx-auto'>
        <div className='h-full w-full'>
          <img src={image} className='rounded h-full w-full '/>
        </div>
        
        <div className='mb-4 lg:p-6 p-4'>
          <h1 className='text-lightBrown font-medium text-xl lg:text-2xl leading-tight font-gothicExpanded'>{title}</h1>
          <p className='text-gray-600 text-md font-normal lg:text-lg mt-1 mb-5 leading-6 tracking-tight '>{description}</p>
          <WhatsAppBtn message={message}/>
        </div>
     
    </motion.div>
  )
}

export default WhatWeDoCard;
