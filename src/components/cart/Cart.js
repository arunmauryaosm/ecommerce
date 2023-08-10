import React from 'react'
import { useCartContext } from '../cart/cartContext'
import Navbar from '../../pages/Navbar';
import Footer from '../../pages/Footer';
import CartItem from './CartItem';
import { Navigate, useNavigate } from 'react-router-dom';


const Cart = ({count, price} ) => {



  const navigate = useNavigate();
  const { cart } = useCartContext();
  console.log(cart);
  return (
    <>

      <Navbar />

      <div className="flex justify-center min-h-screen mt-10">
        <div className="sm:w-2/3 w-full m-3">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          {cart.map((curElem) => (
            

            <CartItem key={curElem.id} {...curElem} />
          ))}


        <div className='flex justify-between my-10'> 
            <div>

            </div>
          <div>
            <button onClick={ () => navigate("/confirmorder")} className='bg-green-600 text-white font-bold rounded-md py-2 sm:px-12 px-8 sm:text-xl text-sm'>Pay Now</button>
          </div>
          </div>
        </div>


      </div>

      <Footer/>

    </>

  )
}

export default Cart
