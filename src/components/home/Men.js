import React from 'react'
import men_banner from '../../images/men_banner.jpg'
import m1 from '../../images/m1.jpg'
import m2 from '../../images/m2.jpg'
import m3 from '../../images/m3.jpg'
import m4 from '../../images/m4.jpg'
import { Link } from 'react-router-dom'

const Men = () => {
    return (
        <div>
            <div className='md:mx-16 sm:mx-4 mx-2'>
                <h1 className='md:text-4xl text-black md:font-semibold md:py-12 sm:text-2xl mt-5 font-bold'>Men's Store</h1>
                <Link to='/'>
                <img className='md:rounded-2xl' src={men_banner} alt='women_banner'/>
                </Link>
            </div>
            
            {/* men slider  */}
            <div className='sm:flex grid justify-between md:mx-16 md:my-10 sm:mx-4 sm:my-10 mt-2 grid-cols-2'>
                <Link to='/men'>
                <img className='md:rounded-2xl md:gap-3 md:w-80 w-72 px-2 py-3 rounded-xl' src={m1} alt='men_dress'/>
                </Link>
                <Link to='/men'>
                <img className='md:rounded-2xl md:gap-3 md:w-80 w-72 px-2 rounded-xl' src={m2} alt='men_dress'/>
                </Link>
                <Link to='/men'>
                <img className='md:rounded-2xl md:gap-3 md:w-80 w-72 px-2 py-3 rounded-xl' src={m3} alt='men_dress'/>
                </Link>
                <Link to='/men'>
                <img className='md:rounded-2xl md:gap-3 md:w-80 w-72 px-2 rounded-xl' src={m4} alt='men_dress'/>
                </Link>
            </div>
        </div>
    )
}

export default Men
