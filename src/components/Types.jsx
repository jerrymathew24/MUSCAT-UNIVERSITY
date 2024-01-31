import React from 'react'
import types from '../assets/types.png'
import arrow from '../assets/arrow.png'

const Types = () => {
    return (
        <div className="p-5 ">
            <h1 className=' text-xl  font-medium ml-16 mt-10'>TYPES OF SCHOLARSHIPS</h1>
            <hr className="border-t-2 border-orange-600 my-2 w-16 m-16" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 m-16">
                <ul className=''>
                    <li><img className='h-10' src={types} alt="" /></li>
                    <li className='font-semibold mt-3 text-gray-800'>Merit-Based Scholarships</li>
                    <li className='text-gray-900 mt-1 font-light'>Awarded to students with exceptional academic achievements, demonstrated leadership skills, or outstanding talents in specific areas.</li>
                </ul>
                {/* <div className="border-l md:border-l-2 border-gray-400 h-40 m-5"></div> */}
                <div className="border-r border-gray-400 "></div>
                <ul className='ml-0'>
                    <li><img className='h-10 ' src={types} alt="" /></li>
                    <li className='font-semibold mt-3 text-gray-800'>Need-Based Scholarships</li>
                    <li className='text-gray-900 mt-1 font-light'>Designed to assist students with financial constraints, these scholarships aim to ensure that deserving candidates can access quality education despite financial barriers.</li>
                </ul>
                {/* <div className="border-l md:border-l-2 border-gray-400 h-40 m-5"></div> */}
                <div className="border-r border-gray-400"></div>
                <ul className='ml-0'>
                    <li><img className='h-10' src={types} alt="" /></li>
                    <li className='font-semibold mt-3 text-gray-800'>Diversity Scholarships</li>
                    <li className='text-gray-900 mt-1 font-light'>Encouraging diversity and inclusion, these scholarships are awarded to students from diverse background and cultures in collaboration with the embassies.</li>
                </ul>
            </div>

            <div className="ml-36 md:ml-96">
                <p className="text-sm font-semibold  ml-2 mt-4 -mb-4">Contact Us</p>
                <img className="w-7 ml-52 -mb-1" src={arrow} alt="enter" />
                <hr className="border-t-2 border-black w-[210px]" />
            </div>
        </div>
    )
}

export default Types;
