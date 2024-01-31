import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import hamburgerIcon from '../assets/hamburgerIcon.png'
import close from '../assets/close.png'


const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const handleClick = () => setToggle(!toggle)

    return (
        <div className='w-full h-[80px]   '>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full border-b border-1 h-full bg-slate-800  flex justify-between items-center md:px-0 px-4'>

                <img src={logo} className="h-[70px] rounded-3xl m-3" />
                <div className='hidden md:flex items-center '>
                    <ul className='flex gap-2 m-3 text-gray-100'>
                        <li>HOME  /</li>
                        <li>ADMISSIONS  /</li>
                        <li>ELIGIBILITY  /</li>
                        <li>STUDENT TRANSFER  /</li>
                        <li>SCHOLARSHIPS</li>
                    </ul>
                </div>
                <div className='hidden md:flex'>

                    <button className='px-8 py-3 rounded-md bg-[#387dbf] text-white font-bold m-3'>CONTACT US</button>
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
                    <li className='p-4 hover:bg-gray-100'>STUDENT TRANSFER</li>
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