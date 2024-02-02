import React from 'react'
import accelerate from '../assets/accelerate.svg'
import arrow from '../assets/arrow.png';


const Scholarships = () => {
    return (
        <div className='w-full p-7  bg-slate-100'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5 xl:gap-9 2xl:gap-14">

                <div className="p-10 md:mt-1  mb-2 mx-10 w-full mt-10 bg-slate-100" >
                    <h1 className="mt-10 text-xl  font-normal lg:text-4xl xl:text-5xl xl:font-medium 2xl:text-6xl">ADMISSION REQUIREMENTS</h1>
                    <hr className="border-t-2 lg:border-t-2 xl:border-t-8 border-orange-600 my-2 w-16 xl:w-44 mb-5" />

                    <p className='mt-5 lg:mt-8  text-gray-600 font-light text-base md:font-normal md:text-xl xl:font-medium lg:text-3xl xl:text-4xl 2xl:text-5xl'>We offer various scholarship opportunities to recognize outstanding achievements and provide financial assistance to talented individuals. Our scholarships are designed to reward merit, encourage diversity, and ensure that deserving students have acces to quality education.</p>
                </div>
                <div className=" w-full mx-auto my-auto ">
                    <img className=' h-40 md:h-60 lg:h-72 xl:h-80 2xl:h-96  mt-2   ' src={accelerate} alt="" />

                </div>
            </div>
            <div className="lg:pl-20 grid grid-cols-1 lg:grid-cols-2 gap-5  md:gap-20 lg:gap-32 xl:gap-40 2xl:gap-0">
                <div className="pt-5">
                    <p className=" font-semibold  ml-2 mt-4 -mb-4 lg:-mb-8 2xl:-mb-16 text-lg md:text-xl  lg:text-2xl xl:text-4xl 2xl:text-6xl">Application & Eligibility</p>
                    <img className="w-7 lg:w-14 -mb-1 transform translate-x-72 lg:translate-x-80 xl:translate-x-[500px] 2xl:translate-x-[700px] 2xl:w-28" src={arrow} alt="enter" />
                    <hr className="border-t-2 lg:border-t-4 2xl:border-t-8 border-black w-10 md:w-48  lg:w-80 xl:w-[500px] 2xl:w-[699px] " />
                </div>
                <div className="pt-5">
                    <p className=" font-semibold  ml-2 mt-4 -mb-4 lg:-mb-8 2xl:-mb-16 text-lg md:text-xl  lg:text-2xl xl:text-4xl 2xl:text-6xl">How to Apply</p>
                    <img className="w-7 lg:w-14 -mb-1 transform translate-x-72 lg:translate-x-80 2xl:translate-x-[700px] 2xl:w-28" src={arrow} alt="enter" />
                    <hr className="border-t-2 lg:border-t-4 2xl:border-t-8 border-black w-72 lg:w-80 2xl:w-[699px] " />
                </div>

            </div>

        </div>
    )
}

export default Scholarships