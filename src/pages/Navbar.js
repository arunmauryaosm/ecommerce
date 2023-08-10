import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import Carousal from "../components/home/Carousal";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";
import logo from '../images/logo.png'

const Navbar = () => {

  const user = useSelector(selectUser)

  return (
    <div>
      <nav className="bg-slate-100 md:w-full md:h-fit md:py-3 sm:py-1">
        <div className="flex justify-around">
          <div>
            <Link to="/">
              <img
                className="md:w-[250px] sm:w-[120px] w-[80px] mt-3 "
                src={logo}
                alt="logo_image"
              />
            </Link>
          </div>

          <ul className="flex my-auto">
            <li>
              <Link to="/" className="md:px-3 md:text-2xl font-bold sm:px-2 sm:text-xl text-xs px-1  text-gray-950">
                Home
              </Link>
            </li>
            <li>
              <Link to="/men" className="md:px-3 md:text-2xl font-bold sm:px-2 sm:text-xl text-xs px-1 text-gray-950">
                Men
              </Link>
            </li>   
            <li>
              <Link to="/women" className="md:px-3 md:text-2xl font-bold sm:px-2 sm:text-xl text-xs px-1 text-gray-950">
                Women
              </Link>
            </li>
          </ul>

          <div className="flex my-auto">
            <Link to='/cart'>
                <AiOutlineShoppingCart size={35} className="w-4 sm:w-16"/>
            </Link>


          {! user ? (
            <Link to='/cart'>
                <button className="bg-black upeercase text-white md:px-3 px-1 py-1 md:text-lg sm:text-base text-[8px] font-semibold tracking-wide uppercase sm:rounded-md rounded flex my-auto mx-auto mt-2 ml-2">Login</button>
            </Link>

          ): (

            <Link to='/profile'>
                <BsPersonCircle size={35} className="w-4 sm:w-16 ml-3 sm:ml-3 text-red-600"/>
            </Link>
              )}
          </div>

        </div>
      </nav>

    </div>
  );
};

export default Navbar;
