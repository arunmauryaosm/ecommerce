import React from 'react'
import Navbar from '../../pages/Navbar'
import Carousal from './Carousal'
import { MdLocalShipping } from 'react-icons/md';
import { FaStore } from 'react-icons/fa';
import { PiKeyReturnFill } from 'react-icons/pi';
import Women from './Women';
import Men from './Men';
import Footer from '../../pages/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Carousal />

            {/* Benefit Section  */}

            <div className='md:mx-16 sm:mx-6 mx-2'>
                <h1 className='md:text-4xl md:text-black md:font-semibold md:py-2 md:pb-7 sm:text-2xl sm:font-bold py-1 pb-3 text-md font-bold'>Our Benefits</h1>

                <div className='flex justify-between'>

                    <div className='bg-slate-100 md:w-fit md:py-8 sm:py-3 md:px-12 sm:px-8 sm:rounded-xl md:flex sm:flex-col py-1 px-2 flex-col m-1 '>
                        <div className='flex md:mx-auto md:my-auto  mx-auto '>
                            <MdLocalShipping size={40} className='w-7 mx-auto md:w-20' />

                        </div>
                        <div className='flex flex-col mx-auto my-auto '>
                            <h className='font-bold md:text-2xl sm:text-xl text-xs'>Free Shiping</h>
                            <p className='font-semibold md:py-1 sm:py-0 md:text-xl sm:text-lg text-[10px]'>On all orders above ₹499</p>

                        </div>
                    </div>

                    <div className='bg-slate-100 md:w-fit md:py-8 sm:py-3 md:px-16 md-px-8 sm:rounded-xl md:flex sm:flex-col py-1 px-2 flex-col m-1'>
                    <div className='flex md:mx-auto md:my-auto  mx-auto '>
                            <FaStore size={35} className='w-7 mx-auto md:w-20'/>

                        </div>
                        <div className='flex flex-col mx-auto my-auto'>

                        <h className='font-bold md:text-2xl sm:text-xl text-xs'>Click & collect </h>
                        <p className='font-semibold md:py-1 sm:py-0 md:text-xl sm:text-lg text-[10px]'>Order online & collect in store</p>
                        </div>
                    </div>

                    <div className='bg-slate-100 md:w-fit md:py-8 sm:py-3 md:px-16 md-px-8 sm:rounded-xl md:flex sm:flex-col py-1 px-2 flex-col m-1'>
                    <div className='flex md:mx-auto md:my-auto  mx-auto'>
                            <PiKeyReturnFill size={35} className='w-7 mx-auto md:w-20' />

                        </div>
                        <div className='flex flex-col mx-auto my-auto'>

                        <h className='font-bold md:text-2xl sm:text-xl text-xs'>Return to store</h>
                        <p className='font-semibold md:py-1 sm:py-0 md:text-xl sm:text-lg text-[10px]'>Return to your nearest store</p>
                        </div>
                    </div>

                </div>

            </div>

            {/* Women section  */}
            <Women/>

            {/* Men section  */}
            <Men/>

            {/* Footer section  */}
            <Footer/>

        </div>
    )
}

export default Home
