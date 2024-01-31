import React from 'react'
import welcome1 from '../assets/welcome1.avif'
import welcome2 from '../assets/welcome2.avif'

const Welcome = () => {
    return (
        <div className='w-full py-7'>
            <div className="max-w-[1480px] w-[600]  m-auto grid grid-cols-2">
                <div className=" w-full max-w-3xl md:mt-1 mt-10 p-5 pb-5 mx-auto mb-5 gap-1 columns-2 ">
                    <img className='md:h-80 h-40' src={welcome1} alt="" />
                    <img className='md:h-80 h-40' src={welcome2} alt="" />

                </div>
                <div className="p-5 md:mt-10 mt-0 mb-5" >
                    <p className='md:font-thin font-mono text-slate-600'>WELCOME TO</p>
                    <h1 className='md:text-xl  '>MUSCAT UNIVERSITY ADMISSIONS</h1>
                    <hr className="border-t-2 border-orange-600 my-1 w-16 " />
                    <p className='mt-5 mb-5 md:font-semibold font-medium text-sm text-slate-900'>Muscat University is dedicated to empowering students to achieve their academic aspirations while fostering a community of learning,innovation and leadership.</p>
                    <p className='text-slate-600 md:text-sm text-xs'>Our admission process is designed to welcome students from diverse backgrounds and provide a rewarding education journey.</p>
                </div>
            </div>
        </div>
    )
}
export default Welcome