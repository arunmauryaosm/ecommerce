import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';


const SignupScreen = () => {

    const navigate = useNavigate();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        ).then((authUser) => {
             navigate("/")
        }).catch((error) => {
            alert(error.message)
        })
    };





  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-600">
      <div className="bg-gray-100 p-8 shadow-md rounded-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign Up for Your Account</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your name"
            />
          </div>
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
            onClick={ register}
          >
            Sign Up
          </button>
          <Link to='/cart'>
          <p className='text-green-700 underline font-normal mt-2 cursor-pointer '>Already have an account.</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupScreen;
