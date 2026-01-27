import AboutUsCard from "../components/AboutUsCard";
import AboutUsDetails from "../AboutUsDetails";

const About = () => {
  return (
    <div className='mt-15 flex flex-col min-h-screen lg:p-20 p-4'>
      <div className='flex-grow'>
        <div>
          <h1 className="text-lightBrown font-black lg:text-5xl text-4xl mt-6 font-gothicExpanded text-center mb-6">Where Beauty Meets Confidence.</h1>
        </div>

        <section>
          {AboutUsDetails.map(text=>{
            return(
              <AboutUsCard
                key={text.id}
                title={text.title}
                text={text.text}
              />
            )
          })}
          
        </section>

        {/* Media followers */}
        {/* <section className=" lg:my-20 my-10">
          <h1 className="text-4xl font-gothicExpanded text-lightBrown text-center mb-6">Media Followers</h1>
          <div className="grid lg:grid-cols-4 grid-cols-1 justify-items-center lg:gap-0 gap-4">
             {MediaDetails.map(media=>{
              return(
              <MediaCard
                key={media.id}
                icon={media.icon}
                media={media.media}
                followers={media.followers}
              />
            )
           })}
          </div>
          
        </section> */}
      </div>
    </div>
  )
}

export default About
