import { FaSquareCheck } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";

const Alert = ({message}) => {
  return (
    <div>
        <div className="flex justify-between items-center gap-6 w-full bg-green-200 p-2 rounded-lg mt-4">
            <FaSquareCheck className="text-green-500 text-4xl"/>
            <p className="text-green-500 text-lg font-medium">{message}</p>
            <IoIosCloseCircle className="text-green-500 text-4xl cursor-pointer"/>
        </div>
    </div>
  )
}

export default Alert;