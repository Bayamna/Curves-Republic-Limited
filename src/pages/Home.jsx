import React from 'react';
import HeroeImg from "../assets/heroeImageWhite.png";
import {Link} from "react-router-dom";
import WhatWeDo from '../whatWeDo';
import WhatWeDoCard from '../components/WhatWeDoCard';

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen min-w-full'>
      <div className='flex-grow'>
        <section className='min-h-100% place-items-center min-w-100% bg-gradient-to-r from-lightGold to-gold grid lg:grid-cols-2 py-35 gap-12 lg:gap-0 px-5 lg:px-10 '>
          <div>
            <h1 className='text-brown font-black text-4xl lg:text-5xl'>Where Beauty Meets Confidence!</h1>
            <p className='text-brown text-xl lg:text-2xl mt-4 font-medium'>
              Strugling with stubborn Fat, Skin Stag, DPN's, Keloid, Dark Spots, Scars or Stretch Marks?
            </p>

            <button className='text-lg text-white bg-gradient-to-r border-3 border-lightBrown from-brown font-bold to-lightBrown px-[25px] py-[10px] cursor-pointer rounded-lg mt-6'>
              <Link to="/booking"><p>Book Us Today!</p></Link>
            </button>
          </div>

          <div>
            <img src={HeroeImg} className=' w-full h-[30rem] transform-none sm:text-center lg:text-center'/>
          </div>
        </section>
      
        <section className='min-w-100% p-10 lg:p-15'>
          <h1 className=' text-4xl lg:text-5xl lg:mb-6 text-lightBrown font-black'>
            Explore Our Services
          </h1>

          <div className='mt-4'>
          {WhatWeDo.map(item=>{
            return (
              <WhatWeDoCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
              />
            )
          })}
          </div>

          <section className='mt-14'>
            <h1 className=' text-4xl lg:text-5xl lg:mb-6 text-lightBrown font-black'>Why Curves Republic</h1>
          </section>

        </section>
      </div>
    </div>
  )
}

export default Home
