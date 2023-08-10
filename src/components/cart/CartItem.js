// src/components/CartItem.js
import React, { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle, AiFillDelete } from 'react-icons/ai';
import { useCartContext } from '../cart/cartContext';

const CartItem = ({ id,  title, img1, price,   singleProduct}) => {

  const { removeItem } = useCartContext();

  const [count, setCount] = useState(1);

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increase = () => {
    if (count < 5) {

      setCount(count + 1);
    }
  };


  return (
    <div>
    <div>

      <div className="flex p-4 border-b border-gray-200 justify-between">
        <div className="flex">
          <img src={img1} alt={title} className="w-16 h-16 object-contain" />
          <div className='ml-2'>
            <h3 className="md:text-lg sm:text-base text-[9px] font-semibold w-20 sm:w-30 md:w-fit">{title}</h3>
            <p className="text-gray-600 font-semibold md:text-xl sm:text-lg text-[10px] mt-[2px]">&#8377; {price}</p>
          </div>
        </div>

        <div className='flex items-center justify-end'>

          <AiOutlineMinusCircle onClick={decrease} size={22} className='sm:w-12 cursor-pointer m-1 w-4 ' />
          <p className='md:text-xl sm:text-base text-xs'>{count}</p>
          <AiOutlinePlusCircle onClick={increase} size={22} className='sm:w-12 cursor-pointer m-1 w-4 ' />


          <p className="text-gray-600 font-semibold md:text-xl sm:text-lg text-xs m-1 flex">&#8377; {count*price}</p>
          <p onClick={() => removeItem(id)} className="text-red-600 cursor-pointer m-1 md:ml-5 text-xs"><AiFillDelete size={25} /></p>
        </div>

      </div>
    </div>

    </div>
  );
};

export default CartItem;
