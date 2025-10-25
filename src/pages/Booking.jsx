import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import axios from "axios";

const API_URL = "http://localhost:3000/api/booking";

const Booking = () => {
    const [input, setInput] = useState({
        fName: "",
        lName: "",
        age: "",
        location: "",
        number: "",
        treatment: "",
        date: new Date().toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    })

    const [bookingSuccessMsg, setBookingSuccessMsg] = useState("");

    //Handle input from the user.
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setInput(prevInput=>{
            return {...prevInput, [name]:value};
        })
    }

    //Submit input to database.
    const handleSubmit = (e)=>{
        e.preventDefault();
        try{
            const response = axios.post(API_URL, input);
            setBookingSuccessMsg(response);
            console.log(response.data);
        }catch (error){
            console.log(error)
        }

        setInput({  
            fName: "",
            lName: "",
            age: "",
            location: "",
            number: "",
            treatment: ""})
    }

  return (
    <div className='mt-[8rem] text-center w-[90%] lg:w-[70%] mx-auto flex flex-col min-h-screen '>
    <div className='flex-grow'>
        <h1 className='text-[2rem] font-bold text-lightBrown tracking-tight'>Get Your Dream Body!</h1>
        <div className='lg:flex justify-between items-start gap-6 mt-6 mb-10 py-[1.5rem] border-2 border-gray-400 rounded-xl bg-white'>
            <div className='text-lightBrown p-6 lg:border-r border-gray-300'>

                <h2 className='text-[1.3rem] font-bold pb-2 border-b border-gray-300 text-gray-600 '>Contact Information</h2>
                <div className='mt-4 border-b border-gray-300 pb-2 flex justify-center items-center gap-2'>
                    <FaLocationDot className='text-lg'/>
                    <p className='text-lightBrown'>Accra-Ghana, Kumasi-Ghana</p>
                </div>

                <div className='mt-4 border-b border-gray-300 pb-2 flex justify-center items-center gap-2'>
                    <IoIosMailOpen className='text-lg'/>
                    <p className='text-lightBrown'>contact@curvesrepublic.com</p>
                </div>

                <div className='mt-4 border-b border-gray-300 pb-2 flex justify-center items-center gap-2'>
                    <FaPhoneVolume className='text-lg'/>
                    <p className='text-lightBrown font-bold'>0243783130 / 0204318170 </p>
                </div>

                <div className='mt-4 border-b border-gray-300 pb-2 flex justify-center items-center gap-2'>
                    <IoLogoWhatsapp className='text-lg'/>
                    <p className='text-lightBrown font-bold'>0203438658</p>
                </div>

            </div>

            <div className='mx-10'>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={input.fName} type='text' name='fName' placeholder='- First Name -' autoComplete='off' className='w-[100%] p-2 p-3 m-1 outline-0 border-2 border-gray-400/20 rounded-lg placeholder:text-gray-600 focus:ring-2 focus:ring-gray-300 text-gray-600 bg-gray-400/10' required/>
                    <input onChange={handleChange} value={input.lName} type='text' name='lName' placeholder='- Last Name -' autoComplete='off' className='w-[100%] p-3 m-1 outline-0 border-2 border-gray-200 rounded-lg  placeholder:text-gray-600 focus:ring-2 focus:ring-gray-300 text-gray-600 bg-gray-400/10' required/>
                    <input onChange={handleChange} value={input.age} type='text' name='age' placeholder='- Age -' autoComplete='off' className='w-[100%] p-3 m-1 outline-0 border-2  border-gray-200 rounded-lg  placeholder:text-gray-600 focus:ring-2 focus:ring-gray-300 text-gray-600 bg-gray-400/10' required/>
                    <input onChange={handleChange} value={input.location} type='text' name='location' placeholder='- Location - ' autoComplete='off' className='w-[100%] p-3 m-1 outline-0 border-2  border-gray-200 rounded-lg placeholder:text-gray-600 focus:ring-2 focus:ring-gray-300 text-gray-600 bg-gray-400/10' required/>
                    <input onChange={handleChange} value={input.number} type='text' name='number' placeholder='- Phone Number - ' autoComplete='off' className='w-[100%] p-3 m-1 outline-0 border-2  border-gray-200 rounded-lg placeholder:text-gray-600 focus:ring-2 focus:ring-gray-300 text-gray-600 bg-gray-400/10' required/>
                    <select onChange={handleChange} value={input.treatment} name='treatment' placeholder="- Select Treatment - " className='w-[100%] p-3 m-1 outline-0 border-2  border-gray-200 rounded-lg placeholder:text-gray-600 focus:ring-2 focus:ring-gray-300 text-gray-600 required appearance-none bg-gray-400/10' required>
                        <option value="">- Select Treatment - </option>
                        <option value="Fat Reduction" className='hover:bg-gray-200'>Fat Reduction</option>
                        <option value="Skin Tag Removal">Skin Tag Removal</option>
                        <option value="Stretch Marks Treatment">Stretch Marks Treatment</option>
                        <option value="Mole Removal">Mole Removal</option>
                        <option value="Wart Removal">Wart Removal</option>
                        <option value="DPN Removal">DPN Removal</option>
                        <option value="Syringoma Removal">Syringoma Removal</option>
                        <option value="Keloid Removal">Keloid Removal</option>
                        <option value="Seborrheic Keratosis Removal">Seborrheic Keratosis Removal</option>
                        <option value="Scar Treatment">Scar Treatment</option>
                        <option value="Skin Booster">Skin Booster</option>
                        <option value="PRP Treatment">PRP Treatment</option>
                        <option value="Orgasm 'O' Shot">Orgasm "O" Shot</option>
                        <option value="Vitamin B12 Shot">Vitamin B12 Shot</option>
                        <option value="Butt Enhancement">Butt Enhancement</option>
                        <option value="Lips Enhancement">Lips Enhancement</option>
                        <option value="Nose Enhancement">Nose Enhancement</option>
                        <option value="Hair Loss Treatment">Hair Loss Treatment</option>
                    </select>
                    <button type='submit' className='bg-gradient-to-r from-brown to-lightBrown text-white px-8 py-2 cursor-pointer border-3 border-lightBrown rounded-lg mt-5 font-bold'>Book Now</button>
                </form>
            </div>
        </div>
        <div className='mb-10'>
            <h1 className='text-[2rem] font-bold text-lightBrown tracking-tight'>Frequently Asked questions</h1>
        </div>
        </div>
    </div>
  )
}

export default Booking;
