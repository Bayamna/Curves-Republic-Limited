import React from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

const Accordion = ({question, answer, onClick, openIcon, closeIcon, stateValue}) => {
  return (
    <div>
       <div className=' bg-gray-400/15 p-4 lg:p-6 border border-gray-400 rounded-lg mt-3'>
            <h1 className='text-gray-600 text-left font-bold text-2xl'>{question}</h1>
            <p className='text-gray-600 text-md lg:text-lg text-left mt-2 leading-tight'>{answer}</p>   
        </div>
    </div>
  )
}

export default Accordion;
