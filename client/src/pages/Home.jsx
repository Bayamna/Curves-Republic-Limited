import {motion} from "framer-motion";
import HeroeImg from "../assets/heroe.png";
import {Link} from "react-router-dom";
import WhatWeDo from '../whatWeDo';
import WhatWeDoCard from '../components/WhatWeDoCard';
import ValuesCard from '../components/ValuesCard';
import valuesData from '../Values';

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen min-w-full'>
      <div className='flex-grow'>

        {/* Heroe section */}
        <section className='min-h-100% place-items-center min-w-100% bg-gradient-to-r from-lightGold to-gold grid lg:grid-cols-2 md:grid-cols-2 lg:py-16 py-30 gap-12 lg:gap-0 px-5 lg:px-10 '>

          <motion.div
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1, ease: "easeOut"}}
            viewport={{ once: true, amount: 0.5 }}
          
            className='text-center lg:text-left md:text-left'>
            <h1 className='text-brown font-medium text-4xl lg:text-5xl font-gothicExpanded'>Where Beauty Meets Confidence!</h1>
            <p className='text-brown text-xl lg:text-2xl mt-4 font-medium mb-8'>
              Strugling with stubborn Fat, Skin Stag, DPN's, Keloid, Dark Spots, Scars or Stretch Marks etc.?
            </p>


            {/* Action button */}
              <Link to="/booking" className='text-sm text-white bg-gradient-to-r from-brown  to-lightBrown px-4 py-2 cursor-pointer rounded-sm font-gothicExpanded tracking-widest'>
              GET APPOINTMENT</Link>
          </motion.div>


          {/* Heroe section image */}
          <motion.div
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1, ease: "easeOut"}}
            viewport={{ once: true, amount: 0.2 }}>

            <img src={HeroeImg} className=' w-full h-full transform-none sm:text-center lg:text-center'/>
          </motion.div>
        </section>


        {/* Explore our services */}
        <section className='min-w-100% p-4 lg:p-10 mt-6'>
          <h1 className=' text-2xl lg:text-3xl lg:mb-6 text-center text-lightBrown font-gothicExpanded tracking-wide'>
            Aesthetics Treatments We Provide
          </h1>

          <div className='mt-5 gap-6 '>
            {WhatWeDo.map(item=>{
              return (
                <WhatWeDoCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    message={item.message}
                />
              )
            })}
          </div>
        </section>
        
        {/* Why curves republic ltd. */}
        <section className='mt-5 lg:mt-4 bg-gradient-to-r from-brown to-lightBrown p-6'>
            <h1 className=' text-2xl lg:text-4xl lg:mb-6 text-center mt-5 lg:mt-6 text-white font-gothicExpanded tracking-wide'>Why Curves Republic Ltd.</h1>
            <div className='grid gap-4 lg:gap-6 lg:grid-cols-2 mb-10 mt-8 lg:mt-12'>
              {valuesData.map(data=>{
                return (
                  <ValuesCard
                  key={data.id}
                  icon={data.icon}
                  title={data.title}
                  description={data.description}
                />
                )
              })}
            </div>
        </section>
      </div>
    </div>
  )
}

export default Home;
