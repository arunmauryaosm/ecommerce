import React, { useEffect, useState } from "react";
import Navbar from "../../pages/Navbar";
import Footer from "../../pages/Footer";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../api/productContext";
import { useCartContext } from "../cart/cartContext";



const Mens = () => {

  const {isLoading, products} = useProductContext();


  if(isLoading){
    return<div>.......Loading</div>
  }



  return (
    <div>
      <Navbar />
      <div >


      

      <div className="  grid md:justify-around sm:justify-around  sm:mx-10 md:my-4 sm:my-2 my-1 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 place-items-center">
        {products.slice(0, 20).map((data) => {
          const { id, title, image, actualPrice, category, price, img1, img2 } =
            data;

          // const {name, company, price, image, id, description} = data;
          return (
              
            <div key={id}>
              
              <Link to={`/singleproduct/${id}`}>
              <img src={image} alt="product_image" width={250}  className="rounded-lg bg-cover shadow-lg mt-10 hover:shadow-2xl h-72"/>
              </Link>  
              <div className="flex">
                <p className="text-2xl font-bold" > &#8377; {price}</p>
                <p className="pl-3 line-through"> &#8377; {actualPrice}</p>
              </div>
                <p className="font-semibold">{title.slice(0,30)}</p>
                <Link to={`/singleproduct/${id}`} > 
                <button className="bg-yellow-700 w-[250px] p-2 rounded-md text-white font-semibold my-2 hover:bg-yellow-800 text-lg">Buy Now</button>
                </Link>
            </div>
            
          
          );
        })}
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default Mens;
