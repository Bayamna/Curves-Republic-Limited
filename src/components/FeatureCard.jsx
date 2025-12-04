import React from 'react'

const FeatureCard = ({image, text}) => {
  return (
    <div className='border-1 border-lightGold rounded-lg mt-5 lg:mt-0'>
        <img src={image} className='w-full'/>
        <p className='p-6 text-lightBrown text-[1rem] lg:text-[1.5rem] font-bold'>{text}</p>
    </div>
  )
}

export default FeatureCard
