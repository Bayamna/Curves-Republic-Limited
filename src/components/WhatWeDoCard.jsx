import React from 'react'

const WhatWeDoCard = ({title, description}) => {
  return (
    <div className='bg-gray-400/10 p-5 lg:p-10 rounded-xl mb-4 drop-shadow-lg drop-shadow-gray-200 border border-gray-400 cursor-pointer'>
      <h1 className='text-lightBrown font-bold text-2xl lg:text-3xl'>{title}</h1>
      <p className='text-gray-600 text-sm font-normal lg:text-lg mt-2 leading-normal'>{description}</p>
    </div>
  )
}

export default WhatWeDoCard
