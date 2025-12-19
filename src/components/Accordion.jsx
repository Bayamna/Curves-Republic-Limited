import React from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

const Accordion = ({question, answer, onClick, openIcon, closeIcon, stateValue}) => {
  return (
    <div>
       <div className=' bg-gray-400/15 p-4 lg:p-6 border border-gray-400 rounded-lg mt-3'>
            <div className='flex justify-start items-center'>
                <h1 className='text-gray-600 text-left font-bold text-2xl'>{question}</h1>
            </div>
            <p className='text-gray-600 text-lg lg:text-xl text-left mt-2'>{answer}</p>   
        </div>
    </div>
  )
}

export default Accordion;
