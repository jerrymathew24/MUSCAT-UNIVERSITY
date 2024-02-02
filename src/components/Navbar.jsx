import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import hamburgerIcon from '../assets/hamburgerIcon.png'
import close from '../assets/close.png'


const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const handleClick = () => setToggle(!toggle)

    return (
        <div className='w-full h-[80px]  lg:h-[200px] xl:h-[300px] 2xl:h-[400px] bg-slate-800  '>
            <div className=' m-auto w-full border-b border-1 h-full   flex justify-between items-center md:px-0 px-4'>

                <img src={logo} className=" m-5  h-14 rounded-xl md:h-10 lg:h-14 xl:h-40 2xl:h-72" />
                <div className='hidden md:flex items-center'>
                    <ul className='flex gap-7 m-3 text-gray-100 text-sm font-light md:font-bold md:text-base xl:text-2xl 2xl:text-4xl'>
                        <li>HOME</li>
                        <li>ADMISSIONS</li>
                        <li>ELIGIBILITY</li>
                        <li>TRANSFER</li>
                        <li>SCHOLARSHIPS</li>
                    </ul>
                </div>
                <div className='hidden md:flex'>

                    <button className='px-8 py-3 font-normal rounded-md bg-[#387dbf] text-white lg:font-bold lg:text-xl xl:text-2xl 2xl:text-4xl m-3 '>CONTACT US</button>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    <img className='h-[40px]' src={toggle ? close : hamburgerIcon} />
                </div>
            </div>
            <div className={toggle ? 'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b' : 'hidden'}>
                <ul>
                    <li className='p-4 hover:bg-gray-100'>HOME  </li>
                    <li className='p-4 hover:bg-gray-100'>ADMISSIONS</li>
                    <li className='p-4 hover:bg-gray-100'>ELIGIBILITY</li>
                    <li className='p-4 hover:bg-gray-100'>TRANSFER</li>
                    <li className='p-4 hover:bg-gray-100'>SCHOLARSHIPS</li>
                    <div className='flex flex-col my-4 gap-4'>
                        <button className='px-8 py-5 rounded-md bg-[#387dbf] text-white font-bold'>CONTACT US</button>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;