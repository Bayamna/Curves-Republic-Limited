import React from 'react'

const ValuesCard = ({icon, title, description}) => {
  return (
    <div className='flex gap-2 lg:gap-3 justify-start items-start p-5 lg:p-6 border border-lightBrown rounded-2xl'>
        <div className='text-gold text-4xl lg:text-5xl' >{icon}</div>
        <div>
            <h1 className='text-gold font-bold text-3xl lg:text-4xl'>{title}</h1>
            <p className='text-white text-md lg:text-lg leading-tight mt-2'>{description}</p>
        </div>
    </div>
  )
}

export default ValuesCard;
