import React from 'react';
import {motion} from "framer-motion";

const WhatWeDoCard = ({title, description}) => {
  return (
    <motion.div 
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1, ease: "easeOut"}}
      viewport={{ once: false, amount: 0.5 }}

      className='bg-gray-400/10 p-4 lg:p-10 rounded-xl mb-4 drop-shadow-lg drop-shadow-gray-200 border border-gray-400 cursor-pointer'>
      <h1 className='text-lightBrown font-bold text-2xl lg:text-3xl leading-tight'>{title}</h1>
      <p className='text-gray-600 text-md font-normal lg:text-lg mt-2 leading-normal tracking-tight'>{description}</p>
    </motion.div>
  )
}

export default WhatWeDoCard;
