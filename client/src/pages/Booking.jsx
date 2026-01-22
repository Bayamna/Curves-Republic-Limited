import React, { useState } from 'react';
import {motion} from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import axios from "axios";
import Accordion from '../components/accordion';
import FAQ from '../faq';
import Alert from '../components/Alert';
import logo from "../assets/logo.png";

const API_URL = "http://localhost:3000/api/booking";

const Booking = () => {
    const [input, setInput] = useState({
        fName: "",
        lName: "",
        age: "",
        location: "",
        number: "",
        treatment: "",
        date: new Date()
    })

    const [bookingSuccessMsg, setBookingSuccessMsg] = useState("");
    const [alert, setAlert]= useState(false);

    //Handle input from the user.
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setInput(prevInput=>{
            return {...prevInput, [name]:value};
        })
    }

    //Submit input to database.
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const response =  await axios.post(API_URL, input);
            setBookingSuccessMsg(response.data);
            console.log(bookingSuccessMsg);
        }catch (error){
            console.log(error);
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
        <h1 className='text-2xl lg:text-4xl text-lightBrown leading-tight font-gothicExpanded tracking-wide'>Let's Book You Today</h1>
        
        <div className='lg:flex justify-between items-center gap-6 mt-6 mb-10  border-2 border-gray-400 rounded-xl bg- bg-gray-400/10'>
            <div className='text-gray-600 p-6 lg:border border-gray-300 bg-gray-400/10 rounded-lg'>

                <h2 className='text-[1.3rem] leading-6 pb-2 border-b border-gray-300 text-gray-600 font-gothicExpanded '>Contact Information</h2>
                <div className='mt-4 border-b border-gray-300 pb-2 flex justify-center items-center gap-2'>
                    <FaLocationDot className='text-lg'/>
                    <p className=''>Accra-Ghana, Kumasi-Ghana</p>
                </div>

                <div className='mt-4 border-b border-gray-300 pb-2 flex justify-center items-center gap-2'>
                    <IoIosMailOpen className='text-lg'/>
                    <p className=''>contact@curvesrepublic.com</p>
                </div>

                <div className='mt-4 border-b border-gray-300 pb-2 flex justify-center items-center gap-2'>
                    <FaPhoneVolume className='text-lg'/>
                    <p className=' font-bold'>0243783130 / 0204318170 </p>
                </div>

                <div className='mt-4 border-b border-gray-300 pb-2 flex justify-center items-center gap-2'>
                    <IoLogoWhatsapp className='text-lg'/>
                    <p className=' font-bold'>0203438658</p>
                </div>

                <div className='flex justify-center items-center'>
                    <img src={logo} width="100" height="100" className='mt-5'/>
                </div>
                

            </div>

            <section 
                className='mx-10 my-10'>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={input.fName} type='text' name='fName' placeholder='Enter your first name' autoComplete='off' className='w-[100%] p-3 m-1 outline-0 border-2 border-gray-400/20 rounded-lg placeholder:text-gray-400 focus:ring-2 focus:ring-gray-300 text-gray-600 bg-gray-400/10' required/>
                    <input onChange={handleChange} value={input.lName} type='text' name='lName' placeholder='Enter your last name' autoComplete='off' className='w-[100%] p-3 m-1 outline-0 border-2 border-gray-200 rounded-lg  placeholder:text-gray-400 focus:ring-2 focus:ring-gray-300 text-gray-600 bg-gray-400/10' required/>
                    <input onChange={handleChange} value={input.age} type='text' name='age' placeholder='Enter your age' autoComplete='off' className='w-[100%] p-3 m-1 outline-0 border-2  border-gray-200 rounded-lg  placeholder:text-gray-400 focus:ring-2 focus:ring-gray-300 text-gray-600 bg-gray-400/10' required/>
                    <select onChange={handleChange} value={input.location} type='text' name='location' placeholder='Select your location ' autoComplete='off' className='w-[100%] p-3 m-1 outline-0 border-2  border-gray-200 rounded-lg placeholder:text-gray-400 focus:ring-2 focus:ring-gray-300 text-gray-600 bg-gray-400/10 appearance-none' required>
                        <option value="" >Select Location</option>
                        <option value="Accra" className='hover:bg-gray-200'>Accra</option>
                        <option value="Kumasi">Kumasi</option>
                    </select>
                    <input onChange={handleChange} value={input.number} type='text' name='number' placeholder='Enter your phone number ' autoComplete='off' className='w-[100%] p-3 m-1 outline-0 border-2  border-gray-200 rounded-lg placeholder:text-gray-400 focus:ring-2 focus:ring-gray-300 text-gray-600 bg-gray-400/10' required/>
                    <select onChange={handleChange} value={input.treatment} name='treatment' className='w-[100%] p-3 m-1 outline-0 border-2  border-gray-200 rounded-lg placeholder:text-gray-400 focus:ring-2 focus:ring-gray-300 text-gray-600 required appearance-none bg-gray-400/10' required>
                        <option value="">Select treatment</option>
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
                    <button type='submit' className='bg-gradient-to-r from-brown to-lightBrown text-white px-8 py-2 cursor-pointer border-3 border-lightBrown rounded-lg mt-5 font-gothicExpanded tracking-wider'>Book Now</button>
                </form>
            </section>
        </div>

        <section className='mb-20 mt-10 lg:mt-15'>
            <h1 className='text-2xl lg:text-4xl text-lightBrown leading-7 lg:leading-10 mb-2 font-gothicExpanded tracking-wide'>Frequently Asked Questions (FAQ's)</h1>
            <p className='text-gray-600 text-sm lg:text-xl leading-tight font-gothicExpanded tracking-wide '>We know you have questions to ask, these are the answers </p>

            <div className='mt-6'>
                {FAQ.map(items=>{
                    return (
                        <Accordion
                            key={items.id}
                            question={items.question}
                            answer={items.answer}
                        />
                    )
                })}
            </div>
        </section>

        {bookingSuccessMsg && <Alert message={bookingSuccessMsg}/>}

        </div>
    </div>
  )
}

export default Booking;
