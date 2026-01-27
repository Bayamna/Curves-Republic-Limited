import {motion} from "framer-motion";
import { useState } from "react";
import { ImCircleDown } from "react-icons/im";
import FAQ from "../faq";

const Accordion = ({question, answer}) => {
  const [selectedQuetion, setSelectedQuestion] = useState(0);

  return (
    <motion.div onClick={()=>setSelectedQuestion(FAQ.id)}>
       <motion.div 
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1, ease: "easeOut"}}
        viewport={{ once: false, amount: 0.2 }}
       
          className=' bg-gray-200/25 p-4 lg:p-6 rounded-lg mt-3 shadow-md cursor-pointer'>
          <div className="flex justify-between items-start gap-6 text-gray-600 text-md lg:text-lg">
             <h1 className='text-left leading-tight font-gothicExpanded tracking-wide'>{question}</h1>
             {/* <ImCircleDown className="text-xl"/>  */}
          </div>

           {selectedQuetion === FAQ.id && <p className='text-gray-600 text-md lg:text-lg text-left mt-2 leading-tight'>{answer}</p>}
        </motion.div>
    </motion.div>
  )
}

export default Accordion;
