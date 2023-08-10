import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProductContextWomen } from './components/womenApi/productContext'
import Footer from './pages/Footer'
import Navbar from './pages/Navbar'
import { useCartContext } from './components/cart/cartContext'

const API = "https://lifestyle-mock-server-api.onrender.com/women/"

const SingleProductWomen = () => {

    //cart
    const {addToCart} = useCartContext();

    const {getWomenSingleProduct, isSingleLoading, singleWomenProduct} = useProductContextWomen();
    const {id} = useParams();

    const {id: hello, title, image, img1, img2, img3, price, actualPrice, category } = singleWomenProduct;

    useEffect(() => {
        getWomenSingleProduct(`${API}${id}`);
    }, [])

  return (
    <div>
    <Navbar/>
      <div className="sm:flex md:my-4 sm:my-2 my-1justify-center">

      <div className="flex flex-row sm:w-1/3  sm:m-10 m-5">
        <div>
        <img className="m-2 rounded-md" src={image} alt="product_image"/>
        <img className="m-2 rounded-md" src={img1} alt="product_image"/>
        </div>
        <div className="m-2">
        <img className="m-2 rounded-md" src={img2} alt="product_image"/>
        <img className="m-2 rounded-md" src={img3} alt="product_image"/>
        </div>
      </div>

        <div className="sm:mt-10 mt-5 sm:w-1/2 p-5">
         <p className="md:text-4xl sm:text-3xl text-2xl font-bold">{title}</p>  
         <div className="flex ">
         <p className="sm:font-normal sm:text-3xl text-2xl mt-4">&#8377; {price}</p>
         <p className="font-normal ml-2 mt-4 line-through">&#8377; {actualPrice}</p>
         </div>
         <p className="mt-4 font-semibold text-sm">Keep your look simple yet stylish by wearing this graceful perky A-line piece designed with embroidery on the surface. The outfit boasts a round neck, three-quarter sleeves, and a curved hemline. Style with a pair of jhumkas and bangles and you are good to go.</p>
        
        {/* // facilities  */}
          <div>
          <p className="uppercase font-semibold text-xl text-yellow-600 mb-2 mt-10">Benefits</p>
          <p className="font-semibold">Free Delivery</p>
          <p className="font-semibold">7 Days Replacement And Return</p>
          </div>

         {/* // product details  */}
         <div className="mt-10">
            <p className="uppercase text-xl font-semibold text-yellow-600 mb-2">Product Details</p>
            <p className="font-semibold">Net Quantity: <spam className="font-normal"> 1 </spam></p>
            <p className="font-semibold">Product: <spam className="font-normal">{category} </spam></p>
            <p className="font-semibold">Country of Origin: <spam className="font-normal">India </spam></p>
         </div>

        {/* // button  */}
         <div>
            <Link to='/cart' onClick={() => addToCart(id,  title, img1, price,   singleWomenProduct)}>
            <button className="bg-yellow-600 p-2 uppercase font-semibold text-2xl w-full mt-6 rounded-md hover:bg-yellow-500 text-white">Add To Cart</button>
            </Link>
         </div>

        </div>
      </div>

    <Footer/>
  </div>
  )
}

export default SingleProductWomen
