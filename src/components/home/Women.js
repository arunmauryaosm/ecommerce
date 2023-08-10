import React from 'react'
import women_banner from '../../images/women_baner.jpg'
import w1 from '../../images/w1.jpg'
import w2 from '../../images/w2.jpg'
import w3 from '../../images/w3.jpg'
import w4 from '../../images/w4.jpg'
import { Link } from 'react-router-dom'

const Women = () => {
    return (
        <div>
            <div className='md:mx-16 sm:mx-4 mx-2'>
                <h1 className='md:text-4xl text-black md:font-semibold md:py-12 sm:text-2xl mt-5 font-bold'>Women's Store</h1>
                <Link to='/'>
                <img className='md:rounded-2xl' src={women_banner} alt='women_banner'/>
                </Link>
            </div>
            
            {/* women slider  */}
            <div className='sm:flex grid justify-between md:mx-16 md:my-10 sm:mx-4 sm:my-10 mt-2 grid-cols-2'>
                <Link to='/women'>
                <img className='md:rounded-2xl md:gap-3 md:w-80 w-72 px-2 py-3 rounded-xl ' src={w1} alt='women_dress'/>
                </Link>
                <Link to='/women'>
                <img className='md:rounded-2xl md:gap-3 md:w-80 w-72 px-2  rounded-xl' src={w2} alt='women_dress'/>
                </Link>
                <Link to='/women'>
                <img className='md:rounded-2xl md:gap-3 md:w-80 w-72 px-2 py-3 rounded-xl' src={w3} alt='women_dress'/>
                </Link>
                <Link to='/women'>
                <img className='md:rounded-2xl md:gap-3 md:w-80 w-72 px-2 rounded-xl' src={w4} alt='women_dress'/>
                </Link>
            </div>
        </div>
    )
}

export default Women
