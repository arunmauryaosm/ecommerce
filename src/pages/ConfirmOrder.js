import React from 'react'
import { useNavigate } from 'react-router-dom';

const ConfirmOrder = () => {

    const navigate = useNavigate();

      return (
        <div className="flex items-center justify-center h-screen bg-slate-600">
          <div className="bg-gray-100 sm:p-16 p-10 rounded shadow-md text-center">
            <h2 className="sm:text-5xl text-3xl font-bold sm:mb-4 mb-2 text-green-800">Order Confirmed!</h2>
            <p className="text-gray-600 sm:mb-4 sm:text-2xl text-xl font-semibold">Thank you for your order.</p>
            <p className="text-gray-600 font-semibold sm:text-2xl text-xl">Your order will be shipped soon.</p>
            <button onClick={ () => navigate("/")} className='bg-green-700 text-white font-bold tracking-wider py-2 sm:px-8 px-5 mt-5 rounded-md sm:text-xl  hover:bg-green-800'>Continue Shopping</button>
          </div>
        </div>
      );

    
}

export default ConfirmOrder