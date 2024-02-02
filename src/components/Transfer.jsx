import React from 'react';
import transfer from '../assets/transfer.avif';
import arrow from '../assets/arrow.png';
import logo from '../assets/logo.jpg';

const Transfer = () => {
    return (
        <div className="p-10  w-full mt-10 bg-slate-100">
            <h1 className="mt-10 text-xl  font-normal lg:text-4xl xl:text-5xl xl:font-medium 2xl:text-6xl">TRANSFER STUDENTS</h1>
            <hr className="border-t-2 lg:border-t-2 xl:border-t-8 border-orange-600 my-2 w-16 xl:w-44 mb-5" />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <div className="">
                    <p className="font-normal mt-3 lg:mt-5 lg:mb-5 text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">MOHERI Transfer Requests</p>

                    <p className=" mt-1 py-3 font-light text-lg md:text-xl lg:text-2xl xl:font-normal xl:text-4xl 2xl:text-6xl text-gray-600">
                        MOHERI transfer students seeking admissions to Muscat University should submit their transfer request via the MOHERI website during the designated transfer periods, typically in January and July. To be considered for admission, these students must meet Muscat University's minimum requirements. Additionally, it is essential to adhere to all rules and regulations outlined by the Internal Scholarship Department.
                    </p>
                    <div className="pt-5">
                        <p className=" font-semibold ml-2 mt-4 -mb-4 lg:-mb-8 2xl:-mb-16 text-lg md:text-xl  lg:text-2xl xl:text-4xl 2xl:text-6xl">Application Process</p>
                        <img className="w-7 lg:w-14 -mb-1 transform translate-x-72 lg:translate-x-80 2xl:translate-x-[700px] 2xl:w-28" src={arrow} alt="enter" />
                        <hr className="border-t-2 lg:border-t-4 2xl:border-t-8 border-black w-72 lg:w-80 2xl:w-[699px] " />
                    </div>
                </div>
                <div className="">
                    <p className="font-normal mt-3 lg:mt-5 lg:mb-5 text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Self-Sponsored Transfer Students</p>

                    <p className=" ml-1 mt-1 py-3 font-light text-lg lg:text-2xl xl:font-normal xl:text-4xl 2xl:text-6xl text-gray-600">
                        For self-sponsored transfer students aspiring to join Muscat University, it is imperative to fulfill all MU requirements and provide all necessary documents during the application process. Ensure that all documentations are complete and in line with the university's guidelines to facilitate a smooth transfer process.
                    </p>
                    <div className="pt-5">
                        <p className=" font-semibold  ml-2 mt-4 -mb-4 lg:-mb-8 2xl:-mb-16 text-lg md:text-xl  lg:text-2xl xl:text-4xl 2xl:text-6xl">Application Process</p>
                        <img className="w-7 lg:w-14 -mb-1 transform translate-x-72 lg:translate-x-80 2xl:translate-x-[700px] 2xl:w-28" src={arrow} alt="enter" />
                        <hr className="border-t-2 lg:border-t-4 2xl:border-t-8 border-black w-72 lg:w-80 2xl:w-[699px] " />
                    </div>

                </div>
                <div className="relative">
                    <img src={transfer} alt="" className="w-full my-auto object-cover rounded-md h-36 md:h-44 lg:h-80 xl:h-72 2xl:h-96" />
                    <img src={logo} alt="" className="absolute bottom-4 left-4 h-14 rounded-md md:bottom-5 lg:bottom-5 xl:bottom-[700px] 2xl:bottom-[1570px]" />
                </div>
            </div>

        </div>
    );
};

export default Transfer;
