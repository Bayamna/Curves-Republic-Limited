import React from 'react'

const LearnMoreCard = ({videoTitle, video}) => {
  return (
    <div className='mt-20'>
        <h1 className='text-xl font-black text-lightBrown'>{videoTitle}</h1>
        <p>{video}</p>
    </div>
  )
}

export default LearnMoreCard;