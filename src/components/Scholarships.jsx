import React from 'react'
import accelerate from '../assets/accelerate.svg'
import arrow from '../assets/arrow.png';


const Scholarships = () => {
    return (
        <div className='w-full py-7 bg-slate-100 md:h-80'>
            <div className="max-w-[1480px] w-[600]  m-0  grid grid-cols-2 ">
                <div className="">
                    <div className="p-5 md:mt-10 mt-0 mb-5" >
                        <h1 className='text-xl font-medium '>SCHOLARSHIPS</h1>
                        <hr className="border-t-2 border-orange-600 my-2 w-16 " />

                        <p className='text-slate-600 md:text-sm text-xs mt-3 col-span-2 '>We offer various scholarship opportunities to recognize outstanding achievements and provide financial assistance to talented individuals. Our scholarships are designed to reward merit, encourage diversity, and ensure that deserving students have acces to quality education.</p>
                        <p className="text-sm font-semibold ml-2 mt-4 -mb-4">Application and Eligibility</p>
                        <img className="w-7 ml-52 -mb-1" src={arrow} alt="enter" />
                        <hr className="border-t-2 border-black w-[210px]" />
                        <p className="text-sm font-semibold ml-2 mt-4 -mb-4">How to Apply</p>
                        <img className="w-7 ml-52 -mb-1" src={arrow} alt="enter" />
                        <hr className="border-t-2 border-black w-[210px]" />

                    </div>

                </div>
                <div className=" w-full ml-20 md:ml-10 ">
                    <img className='md:h-60 h-40  ' src={accelerate} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Scholarships