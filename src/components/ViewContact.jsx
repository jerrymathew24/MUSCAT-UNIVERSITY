import React from 'react'
import arrow from '../assets/arrow.png';

const ViewContact = () => {
    return (
        <div className="">
            <div className='bg-[url("https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]  w-full bg-cover bg-center md:h-52'>
                <p className='text-white text-center p-7 md:p-5'>Muscat University welcomes transfer students and strives to facilitate a seamless transition for those seeking to continue their academic journey with us. For further clarification or assistance regarding transfer requirements, please reach out to our Admissions Team. We are here to support and guide you through the transfer process. </p>
                <div className=" ml-36 md:ml-96  py-3 ">
                    <p className="text-sm font-semibold mt-2 -mb-4 text-white">View contact person details</p>
                    <img className="w-7 ml-52 -mb-1 text-white" src={arrow} alt="enter" />
                    <hr className="border-t-2 border-white w-[210px]" />
                </div>
            </div>
        </div>
    )
}

export default ViewContact