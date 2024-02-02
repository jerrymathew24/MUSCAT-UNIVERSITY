import React from 'react'
import types from '../assets/types.png'
import arrow from '../assets/arrow.png'

const Types = () => {
    return (
        <div className="p-10 w-full">
            <div className="ml-16">
                <h1 className="mt-10 text-xl  font-normal lg:text-4xl xl:text-5xl xl:font-medium 2xl:text-6xl">TYPES OF SCHOLARSHIPS</h1>
                <hr className="border-t-2 lg:border-t-2 xl:border-t-8 border-orange-600 my-2 w-16 xl:w-44 mb-5" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 m-16">
                <ul className=''>
                    <li><img className='h-12 lg:h-14 xl:h-20 2xl:h-28' src={types} alt="" /></li>
                    <li className='font-semibold mt-3 lg:mt-5 lg:mb-5 text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>Merit-Based Scholarships</li>
                    <li className='text-slate-600  mt-1 py-3 font-light xl:font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl  xl:text-4xl 2xl:text-5xl'>Awarded to students with exceptional academic achievements, demonstrated leadership skills, or outstanding talents in specific areas.</li>
                </ul>
                {/* <div className="border-l md:border-l-2 border-gray-400 h-40 m-5"></div> */}
                <div className="border-r border-gray-400 "></div>
                <ul className='ml-0'>
                    <li><img className='h-12 lg:h-14 xl:h-20 2xl:h-28 ' src={types} alt="" /></li>
                    <li className='font-semibold mt-3 lg:mt-5 lg:mb-5 text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>Need-Based Scholarships</li>
                    <li className='text-slate-600  mt-1 py-3 font-light xl:font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl  xl:text-4xl 2xl:text-5xl'>Designed to assist students with financial constraints, these scholarships aim to ensure that deserving candidates can access quality education despite financial barriers.</li>
                </ul>
                {/* <div className="border-l md:border-l-2 border-gray-400 h-40 m-5"></div> */}
                <div className="border-r border-gray-400"></div>
                <ul className='ml-0'>
                    <li><img className='h-12 lg:h-14 xl:h-20 2xl:h-28' src={types} alt="" /></li>
                    <li className='font-semibold mt-3 lg:mt-5 lg:mb-5 text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>Diversity Scholarships</li>
                    <li className='text-slate-600  mt-1 py-3 font-light xl:font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl  xl:text-4xl 2xl:text-5xl'>Encouraging diversity and inclusion, these scholarships are awarded to students from diverse background and cultures in collaboration with the embassies.</li>
                </ul>
            </div>


            <div className="pt-5">
                <p className="text-center font-semibold  ml-2 mt-4 -mb-4 lg:-mb-8 2xl:-mb-16 text-lg md:text-xl  lg:text-2xl xl:text-4xl 2xl:text-6xl">Contact Us</p>
                <img className="w-7 lg:w-14 -mb-1 transform translate-x-40 lg:translate-x-40 2xl:translate-x-80 2xl:w-28 mx-auto" src={arrow} alt="enter" />
                <hr className="border-t-2 lg:border-t-4 2xl:border-t-8 border-black w-72 lg:w-80 2xl:w-[699px] mx-auto " />
            </div>
        </div>
    )
}

export default Types;
