import React from 'react'
import admission1 from '../assets/admission1.avif'
import admission2 from '../assets/admission2.avif'
import admission3 from '../assets/admission3.avif'
import admission4 from '../assets/admission4.avif'
import admission5 from '../assets/admission5.avif'




const Admission = () => {
    return (
        <div className="w-full bg-slate-400">
            <div className='bg-[url("https://images.unsplash.com/photo-1669634941363-a7276fe0fb6d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] md:h-[900px] h-[1200] w-full bg-cover bg-center p-5'>
                <h1 className=' md:max-w-[1480px] max-w-[600px]  text-center text-white  m-10 text-xl font-semibold  mb-2'>ADMISSION PROCESS</h1>
                <div className="flex justify-center">
                    <hr className="border-t-2 border-orange-600 my-1 w-16 mx-auto" />
                </div>

                <p className='md:text-sm text-center  text-white'>Navigating the admissions process at Muscat University is straight forward and transparent</p>

                <div className=" gap-10 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 m-5">
                    <div className="grid grid-cols-1 bg-cyan-500 rounded-t-lg ">
                        <h1 className='text-white rounded-t-lg  h-[40px] text-center text-base p-1 '>Explore Programes</h1>
                        <img className='rounded-t-lg w-full max-h-28' src={admission1} alt="" />
                        <div className="bg-white p-7 text-sm">
                            <p className='mb-4'>Discover our diverse range of programes spanning various disciplines.</p>
                            <p className='mb-4'>Find the program that aligns with your passion and carrer aspirations.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 bg-cyan-500 rounded-t-lg ">
                        <h1 className='text-white rounded-t-lg  h-[40px] text-center text-base p-1 '>Check Requirements</h1>
                        <img className='rounded-t-lg w-full max-h-28' src={admission2} alt="" />
                        <div className="bg-white p-7 text-sm">
                            <p className='mb-4'>Review the admission criteria for your chosen program</p>
                            <p className='mb-4'>This include academic qualifications, IELTS scores, and any supplymentary materials necessary for a complete application.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 bg-cyan-500 rounded-t-lg ">
                        <h1 className='text-white rounded-t-lg  h-[40px] text-center text-base p-1 '>Submit Your Application</h1>
                        <img className='rounded-t-lg w-full max-h-28' src={admission3} alt="" />
                        <div className="bg-white p-7 text-sm">
                            <p className='mb-4'>Complete your application conviniently through our online platform. </p>
                            <p className='mb-4'>Ensure all necessary documets are included and submitted within th especified deadlines.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 bg-cyan-500 rounded-t-lg ">
                        <h1 className='text-white rounded-t-lg  h-[40px] text-center text-base p-1 '>Track Application Status</h1>
                        <img className='rounded-t-lg w-full max-h-28' src={admission4} alt="" />
                        <div className="bg-white p-7 text-sm">
                            <p className='mb-4'>Stay updated on your application status through our online portal.</p>
                            <p className='mb-4'>Regular updates will keep you informed about the progress of your application.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 bg-cyan-500 rounded-t-lg ">
                        <h1 className='text-white rounded-t-lg  h-[40px] text-center text-base p-1 '>Acceptance and Enrollment</h1>
                        <img className='rounded-t-lg w-full max-h-28' src={admission5} alt="" />
                        <div className="bg-white p-7 text-sm">
                            <p className='mb-4'>Upon acceptance, follow the provided instructions to confirm your enrollment and commence your enriching experience at Muscat University.</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Admission