import React from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdLiveHelp } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <div className='bg-slate-100 md:w-full sm:w-fit w-full h-fit md:mt-20 sm:mt-10 mt-5'>
        
        <div className='flex justify-around'>
            <div className='flex md:p-5 sm:p-3 p-1'>
                <div className='mx-auto my-auto flex md:pr-4 sm:pr-3 pr-2'>
                    <BiSolidPhoneCall size={35} className='w-6 sm:w-8'/>
                </div>
                <div className='flex flex-col'>
                <h className='md:text-lg sm:text-sm text-xs text-gray-600 font-semibold'>Talk to us</h>
                <h className='md:text-xl sm:text-sm text-xs'>1800-123-1555</h>
                </div>
            </div>
            {/* <div className='flex md:p-5 sm:p-3 p-1'>
                <div className='mx-auto my-auto flex md:pr-4 sm:pr-2 pr-1'>
                    <MdLiveHelp size={35} className='w-2 sm:w-6'/>
                </div>
                <div className='flex flex-col'>
                <h className='md:text-lg sm:text-sm text-xs text-gray-600 font-semibold'>Helpcenter</h>
                <h className='md:text-xl sm:text-sm text-xs'>support@outfit.com</h>
                </div>
            </div> */}
            <div className='flex md:p-5 sm:p-3 p-1'>
                <div className='mx-auto my-auto flex md:pr-4 sm:pr-3 pr-2'>
                    <GrMail size={35} className='w-6 sm:w-8'/>
                </div>
                <div className='flex flex-col'>
                <h className='md:text-lg sm:text-sm text-[10px] text-gray-600 font-semibold'>Write to us</h>
                <h className='md:text-xl sm:text-sm text-[10px]'>contact@outfit.com</h>
                </div>
            </div>
        </div>
        
        <div className='md:mx-16 sm:mx-10 mx-4 md:py-5 sm:py-3 py-2 flex justify-between'>
            <div className='md:flex md:my-auto sm:flex sm:my-auto flex '>
                <img className="md:w-[250px] sm:w-[150] w-[80px] my-auto mt-2 "
                src={logo}
                alt="logo_image"/>
                <p className='font-semibold md:text-xl sm:text-sm text-[8px] flex my-auto'>&copy; 2023 all rights reserved - outfit.com | arunmaurya.in</p>
            </div>
            <div className='grid grid-flow-col md:gap-10 sm:gap-5 gap-2 my-auto'>
                <AiFillFacebook size={35} className='w-4 sm:w-8'/>
                <AiFillInstagram size={35} className='w-4 sm:w-8'/>
                <BsYoutube size={35} className='w-4 sm:w-8'/>

            </div>
        </div>

    </div>
  )
}

export default Footer
