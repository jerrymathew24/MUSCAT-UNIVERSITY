import React from 'react';
import transfer from '../assets/transfer.avif';
import arrow from '../assets/arrow.png';
import logo from '../assets/logo.jpg';

const Transfer = () => {
    return (
        <div className="w-full p-10 bg-slate-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:mt-10">
                        <h1 className="text-xl font-semibold text-slate-900 mb-2">TRANSFER STUDENTS</h1>
                        <hr className="border-t-2 border-orange-600 my-2 w-16 " />

                        <div className="p-2">
                            <p className="mt-5 mb-5 font-semibold md:font-medium text-base text-slate-900">MOHERI Transfer Requests</p>
                            <p className="text-slate-600 md:text-sm text-xs">
                                MOHERI transfer students seeking admissions to Muscat University should submit their transfer request via the MOHERI website during the designated transfer periods, typically in January and July. To be considered for admission, these students must meet Muscat University's minimum requirements. Additionally, it is essential to adhere to all rules and regulations outlined by the Internal Scholarship Department.
                            </p>
                            <p className="text-sm font-semibold mt-4 -mb-4">Transfer Application Process</p>
                            <img className="w-7 ml-52 -mb-1" src={arrow} alt="enter" />
                            <hr className="border-t-2 border-black w-[210px]" />
                            <p className="mt-5 mb-5 font-semibold md:font-medium text-base text-slate-900">Self-Sponsored Transfer Students</p>
                            <p className="text-slate-600 md:text-sm text-xs">
                                For self-sponsored transfer students aspiring to join Muscat University, it is imperative to fulfill all MU requirements and provide all necessary documents during the application process. Ensure that all documentations are complete and in line with the university's guidelines to facilitate a smooth transfer process.
                            </p>
                            <p className="text-sm font-semibold mt-4 -mb-4">Transfer Application Process</p>
                            <img className="w-7 ml-52 -mb-1" src={arrow} alt="enter" />
                            <hr className="border-t-2 border-black w-[210px]" />
                        </div>
                    </div>
                    <div className="relative">
                        <img src={transfer} alt="Background image" className="w-full object-cover h-64 md:h-auto" />
                        <img src={logo} alt="Overlay image" className="absolute bottom-4 left-4 md:bottom-7 md:right-2 w-20 h-20 rounded-3xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transfer;
