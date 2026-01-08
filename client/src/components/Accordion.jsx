import {motion} from "framer-motion";

const Accordion = ({question, answer}) => {
  return (
    <motion.div>
       <motion.div 
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1, ease: "easeOut"}}
        viewport={{ once: false, amount: 0.2 }}
       
        className=' bg-gray-200/10 p-4 lg:p-6 border border-gray-400 rounded-lg mt-3'>
            <h1 className='text-gray-600 text-left font-bold text-2xl leading-tight'>{question}</h1>
            <p className='text-gray-600 text-md lg:text-lg text-left mt-2 leading-tight'>{answer}</p>   
        </motion.div>
    </motion.div>
  )
}

export default Accordion;
