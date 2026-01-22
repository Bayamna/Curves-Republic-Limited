import { FaSquareCheck } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

const Alert = ({message, onClick}) => {
  return (
    <motion.div className="fixed lg:bottom-4 bottom-1 lg:left-5 left-1"
      initial={{y: 40}}
      animate={{y: 0}}
      transition={{duration: 0.3}}
    >
        <div className="flex justify-between items-center gap-2 w-full bg-green-200 p-2 rounded-lg mt-4 border border-green-500">
            <FaSquareCheck className="text-green-500 text-3xl"/>
            <p className="text-green-500 lg:text-[1rem] text-[.7rem] font-medium">{message}</p>
            {/* <IoIosCloseCircle className="text-green-500 text-4xl cursor-pointer" onClick={onClick}/> */}
        </div>
    </motion.div>
  )
}

export default Alert;