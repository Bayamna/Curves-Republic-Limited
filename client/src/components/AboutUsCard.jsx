import {motion} from "framer-motion";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";

const AboutUsCard = ({title, text}) => { 
  return (
    <motion.div 
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1, ease: "easeOut"}}
        viewport={{ once: true, amount: 0.5 }}
        
        className="mt-2 bg-gray-200/25 lg:p-30 p-8 rounded-lg border border-gray-300 text-center flex flex-col justify-center items-center">
        <h1 className="text-lightBrown font-medium text-xl lg:text-3xl leading-tight font-gothicExpanded">{title}</h1>
        <BsFillChatSquareQuoteFill className="lg:text-6xl text-4xl text-lightBrown my-4"/>
        <p className="text-gray-600 text-md font-normal lg:text-lg leading-6 tracking-tight">{text}</p>
    </motion.div>
  )
}

export default AboutUsCard;