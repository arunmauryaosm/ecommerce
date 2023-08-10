import React, { useRef, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

const LoginScreen = () => {

    const navigate = useNavigate();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const logIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        ).then((authUser) => {
            // console.log(authUser)
            // navigate("/")
        }).catch((error) => {
            alert(error.message)
        })
    }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-slate-600"
    //   style={{
    //     backgroundImage: `url(${backgroundImage})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //   }}
    >
      <div className="bg-gray-300 p-8 shadow-md rounded-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Login to Your Account</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
            ref={emailRef}
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
            ref={passwordRef}
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            onClick={logIn}
          >
            Login
          </button>
          <Link to='/signup'>
          <p className='text-red-600 font-normal mt-2 cursor-pointer '>Don't have an account?</p>
          </Link>
        </form>
      </div>
</div>
  );
};

export default LoginScreen;
