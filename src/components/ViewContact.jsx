import React from 'react'
import arrow from '../assets/arrow.png';

const ViewContact = () => {
    return (
        <div className="">
            <div className='rounded-lg bg-[url("https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]  w-full bg-cover bg-center'>
                <p className='text-white  mt-1 p-10 font-light text-lg md:text-xl lg:text-2xl xl:font-normal xl:text-4xl 2xl:text-6xl '>Muscat University welcomes transfer students and strives to facilitate a seamless transition for those seeking to continue their academic journey with us. For further clarification or assistance regarding transfer requirements, please reach out to our Admissions Team. We are here to support and guide you through the transfer process. </p>
                <div className="pt-5 lg:p-7">
                    <p className="text-center font-semibold  ml-2 mt-4 -mb-4 lg:-mb-8 2xl:-mb-16 text-lg md:text-xl  lg:text-2xl xl:text-4xl 2xl:text-6xl text-white">Contact Us</p>
                    <img className="w-7 lg:w-14 -mb-1 transform translate-x-40 lg:translate-x-40 2xl:translate-x-80 2xl:w-28 mx-auto" src={arrow} alt="enter" />
                    <hr className="border-t-2 lg:border-t-4 2xl:border-t-8 border-white w-72 lg:w-80 2xl:w-[699px] mx-auto " />
                </div>
            </div>
        </div>
    )
}

export default ViewContact