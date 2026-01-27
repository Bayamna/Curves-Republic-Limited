import {motion} from "framer-motion";
import WhatsAppBtn from './WhatsAppBtn';
import LearnMoreBtn from './LearnMoreBtn';
import LearnMoreCard from "./LearnMoreCard";

const WhatWeDoCard = ({title, description, image, message, videoTitle, video}) => {
  return (
    <motion.div 
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1, ease: "easeOut"}}
      viewport={{ once: true, amount: 0.5 }}

      className='bg-gray-200/25 mt-5 rounded-lg drop-shadow-lg shadow-sm drop-shadow-gray-200 grid lg:grid-cols-2 md:grid-cols-2 justify-center items-center lg:gap-10 gap-2 lg:w-full md:w-full w-full mx-auto'>
        <div className='h-full w-full'>
          <img src={image} className='rounded h-full w-full object-cover border border-gray-200'/>
        </div>
        
        <div className='mb-4 lg:p-6 p-4'>
          <h1 className='text-lightBrown font-medium text-xl lg:text-2xl leading-tight font-gothicExpanded'>{title}</h1>
          <p className='text-gray-600 text-md font-normal lg:text-lg mt-1 mb-5 leading-6 tracking-tight '>{description}</p>
          <WhatsAppBtn message={message}/>
          <LearnMoreBtn/>
        </div>
     
    </motion.div>
  )
}

export default WhatWeDoCard;
