import React from 'react'
import { CgProfile } from "react-icons/cg";
import Navbar from './Navbar';
import { selectUser } from '../feature/userSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Profile = () => {

    const user = useSelector(selectUser)
    const navigate = useNavigate()
    return (
        <div className='md:w-full h-screen bg-slate-600'>
            <Navbar/>
            <div className='flex justify-center items-center md:p-5 sm:p-3 p-1 flex-col'>

                <div className=' grid place-items-center w-fit bg-gray-300 md:p-10 sm:p-7 px-1 py-4 mt-10 rounded-xl'>
                    <div className='flex'>

                        <div className='profile_logo m-3 justify-start'>
                            <CgProfile size={50} color='red' className='w-8 sm:w-14 md:w-30' />
                        </div>
                        <div className='m-3'>
                            <p className='md:text-2xl sm:text-xl text-sm font-bold tracking-wide mb-2'>Profile</p>
                            <p className='md:text-2xl sm:text-xl text-sm font-semibold'>{user.email}</p>
                        </div>
                    </div>
                    <button onClick={() => auth.signOut(navigate('/'))} className='bg-red-800 md:w-full w-fit sm:tracking-wide md:px-12 px-7 md:mt-6 sm:mt-4 mt-1 py-1 text-white font-semibold md:text-xl text-xs rounded-md uppercase'>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Profile