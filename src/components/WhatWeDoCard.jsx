import React from 'react'

const WhatWeDoCard = ({title, description}) => {
  return (
    <div className='bg-gradient-to-r from-lightBrown to-brown p-5 lg:p-10 rounded-xl mb-4 drop-shadow-lg drop-shadow-gray-200 border-3 border-white cursor-pointer'>
      <h1 className='text-white font-bold text-2xl lg:text-4xl'>{title}</h1>
      <p className='text-white text-sm font-medium lg:text-lg mt-2 leading-5'>{description}</p>
    </div>
  )
}

export default WhatWeDoCard
