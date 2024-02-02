import React from 'react'
import welcome1 from '../assets/welcome1.avif'
import welcome2 from '../assets/welcome2.avif'

const Welcome = () => {
    return (
        <div className='w-full py-3 m-10'>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className=" w-full p-5 mx-auto columns-2 md:mt-20 lg:mt-40 xl:mt-12 gap-2">
                    <img className='h-48 rounded-sm sm:h-56 md:h-[450] lg:h-[500px] xl:h-[600px] 2xl:w-[800px]' src={welcome1} alt="" />
                    <img className='h-48 rounded-sm sm:h-56 md:h-[450] lg:h-[500px] xl:h-[600px] 2xl:w-[800px]' src={welcome2} alt="" />

                </div>
                <div className="p-5  mt-0 mb-5" >
                    <p className='font-mono md:font-thin text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl  text-slate-600'>WELCOME TO</p>
                    <h1 className="mt-10 text-xl  font-normal sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:font-medium 2xl:text-6xl">MUSCAT UNIVERSITY ADMISSIONS</h1>
                    <hr className="border-t-2 lg:border-t-2 xl:border-t-8 border-orange-600 my-2 w-16 xl:w-44 mb-5" />

                    <p className='mt-1 py-3 font-semibold text-lg md:text-xl lg:text-bold lg:text-2xl  xl:text-3xl 2xl:text-5xl  md:py-5 lg:py-8 xl:py-10 2xl:py-14'>Muscat University is dedicated to empowering students to achieve their academic aspirations while fostering a community of learning,innovation and leadership.</p>
                    <p className='text-slate-600 mt-1 py-3 font-semibold text-lg md:text-xl lg:text-bold lg:text-2xl  xl:text-3xl 2xl:text-5xl  md:py-5 lg:py-8 xl:py-10 2xl:py-14'>Our admission process is designed to welcome students from diverse backgrounds and provide a rewarding education journey.</p>
                </div>
            </div>
        </div>
    )
}
export default Welcome