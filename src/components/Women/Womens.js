import React from "react";
import Navbar from "../../pages/Navbar";
import Footer from "../../pages/Footer";
import { Link } from "react-router-dom";
import { useProductContextWomen } from "../womenApi/productContext";

const Mens = () => {

  const {isLoading, womenProducts} = useProductContextWomen();

  if(isLoading){
    return<div>.......Loading</div>
  }

  // console.log(womenProducts);


  // const [myData, setMyData] = useState([]);
  // const [isError, setIsError] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://lifestyle-mock-server-api.onrender.com/women")
  //     .then((res) => setMyData(res.data))
  //     .catch((error) => setIsError(error.message));
  // }, []);

  return (
    <div>
      <Navbar />

      <div className="grid md:justify-around sm:justify-around  sm:mx-10 md:my-4 sm:my-2 my-1 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 place-items-center">
        {womenProducts.slice(0, 20).map((data) => {
          const { id, title, image, actualPrice, category, price, img1, img2 } =
            data;

          // const {name, company, price, image, id, description} = data;
          return (
              
            <div key={id}>
              
              <Link to={`/singleproductwomen/${id}`}>
              <img src={image} alt="product_image" width={250}  className="rounded-lg bg-cover shadow-lg mt-10 hover:shadow-2xl h-72"/>
              </Link>  
              <div className="flex">
                <p className="text-2xl font-bold" > &#8377; {price}</p>
                <p className="pl-3 line-through"> &#8377; {actualPrice}</p>
              </div>
                <p className="font-semibold">{title.slice(0,30)}</p>
                <Link to={`/singleproductwomen/${id}`} > 
                <button className="bg-yellow-700 w-[250px] p-2 rounded-md text-white font-semibold my-2 hover:bg-yellow-800 text-lg">Buy Now</button>
                </Link>
            </div>
            
          
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Mens;
