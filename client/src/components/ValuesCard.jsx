import React from 'react';
import {motion} from "framer-motion";

const ValuesCard = ({icon, title, description}) => {
  return (
    <motion.div 
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1, ease: "easeOut"}}
      viewport={{ once: false, amount: 0.5 }}
    
      className='flex gap-2 lg:gap-3 justify-start items-start p-5 lg:p-6 border border-lightBrown rounded-2xl'>
        <div className='text-gold text-4xl lg:text-5xl' >{icon}</div>
        <div>
            <h1 className='text-gold text-2xl lg:text-3xl font-gothicExpanded tracking-wide'>{title}</h1>
            <p className='text-white text-md lg:text-lg leading-tight mt-2'>{description}</p>
        </div>
    </motion.div>
  )
}

export default ValuesCard;
