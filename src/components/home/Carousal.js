import React, { useEffect, useState } from 'react'

const carousalImage = [
  'https://github.com/deepakpatil26/spiffy-farm-6274/blob/main/app-clone/src/Asssets/SliderImage5.jpg?raw=true',
  'https://github.com/deepakpatil26/spiffy-farm-6274/blob/main/app-clone/src/Asssets/SliderImage3.jpg?raw=true',
  'https://github.com/deepakpatil26/spiffy-farm-6274/blob/main/app-clone/src/Asssets/SliderImage2.gif?raw=true',
];
let count = 0;

const Carousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    startSlider();
  }, []);

  const startSlider = () => {
    setInterval(() => {
        onNextClick();
    }, 5000);
  }
  
  const onNextClick = () => {
    count = (count + 1) % carousalImage.length;
    setCurrentIndex(count);
  } 

  return (
      <div className='w-fit h-fit mx-auto flex sm:py-12 py-4 sm:px-4 px-2 overflow-auto'>
          <img className='sm:rounded-lg rounded-md' src={carousalImage[currentIndex]} alt='carousal_image' onClick={onNextClick}/>
      </div>

  )
}

export default Carousal
