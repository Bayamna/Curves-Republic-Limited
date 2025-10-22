import React from 'react'
import HeroeImg from "../assets/heroeImageWhite.png"
import {Link} from "react-router-dom"
import FeatureCard from '../components/FeatureCard'
import FatImg from '../assets/fat-lose.png'
import GlowImg from '../assets/glow-skin.png'
import SkinTagImg from '../assets/skin-tag.png'
import SkinProductImg from '../assets/skin-products.png'

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen min-w-full'>
      <div className='flex-grow'>
        <section className='text-5xl min-h-100% place-items-center min-w-100% bg-gradient-to-r from-gold to-lightGold grid lg:grid-cols-2 py-35 gap-12 lg:gap-0 px-10 '>
          <div>
            <h1 className='text-brown font-black'>Where Beauty Meets Confidence!</h1>
            <p className='text-brown text-2xl mt-4'>
              Strugling with stubborn Fat, Skin Stag, DPN's, Keloid, Dark Spots, Scars or Stretch Marks?
            </p>

            <button className='text-[18px] text-white bg-gradient-to-r from-brown to-lightBrown px-[25px] py-[15px] cursor-pointer rounded-lg mt-6'>
              <Link to="/booking"><p>Book Us Today!</p></Link>
            </button>
          </div>

          <div>
            <img src={HeroeImg} className=' w-full h-[30rem] transform-none sm:text-center lg:text-center'/>
          </div>
        </section>
      
        <section className='min-w-100% p-20'>
          <h1 className=' text-xl lg:text-2xl text-white bg-gradient-to-r from-brown to-lightBrown px-10 py-4 text-center rounded-lg'>
            What Would You Like to Fix Today?
          </h1>

          <div className='mt-4 lg:grid lg:grid-cols-2 lg:gap-4'>
            <FeatureCard image={FatImg} text="Cryolipolysis, Cavitation, Radiofrequency, EMS, Fat Dissolving Injections."/>
            <FeatureCard image={GlowImg} text="Facials & Skin Therapy."/>
            <FeatureCard image={SkinTagImg} text="Remove skin tags, moles, DPNs, keloids & dark spots."/>
            <FeatureCard image={SkinProductImg} text="Body Lotions, Shower Gels, Creams, Face Serums."/>
            <FeatureCard image={SkinTagImg} text="Remove skin tags, moles, DPNs, keloids & dark spots."/>
            <FeatureCard image={SkinProductImg} text="Body Lotions, Shower Gels, Creams, Face Serums."/>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
