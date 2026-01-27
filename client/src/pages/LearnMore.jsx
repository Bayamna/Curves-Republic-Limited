import React from 'react';
import LearnMoreCard from '../components/LearnMoreCard';

const LearnMore = ({videoTitle, video}) => {
  return (
    <div className='min-h-screen'>
        <LearnMoreCard videoTitle={videoTitle} video={video}/>
    </div>
  )
}

export default LearnMore;