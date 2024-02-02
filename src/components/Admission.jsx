import React from 'react'
import admission1 from '../assets/admission1.avif'
import admission2 from '../assets/admission2.avif'
import admission3 from '../assets/admission3.avif'
import admission4 from '../assets/admission4.avif'
import admission5 from '../assets/admission5.avif'




const Admission = () => {
    return (
        <div className='w-full bg-[url("https://images.unsplash.com/photo-1669634941363-a7276fe0fb6d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]   bg-cover bg-center p-5'>
            <div className=" grid grid-cols-1">
                <h1 className='text-center text-white  m-10 mb-2 mt-10 text-xl  font-normal lg:text-4xl xl:text-5xl xl:font-medium 2xl:text-6xl'>ADMISSION PROCESS</h1>
                <div className="flex justify-center">
                    <hr className="border-t-2 lg:border-t-2 xl:border-t-8 border-orange-600 my-2 w-16 xl:w-44 mb-5" />
                </div>
                <p className='mt-1 font-light text-lg md:text-xl lg:text-2xl xl:font-normal xl:text-4xl 2xl:text-6xl text-white md:py-5 lg:py-8 xl:py-10 2xl:py-14 text-center'>Navigating the admissions process at Muscat University is straight forward and transparent</p>
            </div>



            <div className="gap-10 m-5 grid  grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">


                <div className=" grid grid-cols-1 bg-cyan-500 rounded-t-lg lg:rounded-t-3xl ">
                    <h1 className='py-2 text-center pt-4 text-xl  font-medium md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white '>Explore Programes</h1>
                    <img className='rounded-t-lg lg:rounded-t-3xl w-full h-40 lg:h-72' src={admission1} alt="" />
                    <div className="bg-white ">
                        <p className='mt-1 mx-4 py-3 font-light text-sm md:text-sm lg:text-xl xl:font-normal xl:text-2xl 2xl:text-5xl text-gray-600 md:py-5 lg:py-8 xl:py-10 2xl:py-14'>Discover our diverse range of programes spanning various disciplines.</p>
                        <p className='mt-1 mx-4 py-3 font-light text-sm md:text-sm lg:text-xl xl:font-normal xl:text-2xl 2xl:text-5xl text-gray-600 md:py-5 lg:py-8 xl:py-10 2xl:py-14'>Find the program that aligns with your passion and carrer aspirations.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 bg-cyan-500 rounded-t-lg lg:rounded-t-3xl ">
                    <h1 className='py-2 text-center pt-4 text-xl  font-medium md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white'>Check Requirements</h1>
                    <img className='rounded-t-lg lg:rounded-t-3xl w-full h-40 lg:h-72' src={admission2} alt="" />
                    <div className="bg-white">
                        <p className=' mt-1 mx-4 py-3 font-light text-sm md:text-sm lg:text-xl xl:font-normal xl:text-2xl 2xl:text-5xl text-gray-600 md:py-5 lg:py-8 xl:py-10 2xl:py-14'>Review the admission criteria for your chosen program</p>
                        <p className=' mt-1 mx-4 py-3 font-light text-sm md:text-sm lg:text-xl xl:font-normal xl:text-2xl 2xl:text-5xl text-gray-600 md:py-5 lg:py-8 xl:py-10 2xl:py-14'>This include academic qualifications, IELTS scores, and any supplymentary materials necessary for a complete application.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 bg-cyan-500 rounded-t-lg lg:rounded-t-3xl ">
                    <h1 className='py-2 text-center pt-4 text-xl  font-medium md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white'>Submit Your Application</h1>
                    <img className='rounded-t-lg lg:rounded-t-3xl w-full h-40 lg:h-72' src={admission3} alt="" />
                    <div className="bg-white">
                        <p className=' mt-1 mx-4 py-3 font-light text-sm md:text-sm lg:text-xl xl:font-normal xl:text-2xl 2xl:text-5xl text-gray-600 md:py-5 lg:py-8 xl:py-10 2xl:py-14'>Complete your application conviniently through our online platform. </p>
                        <p className=' mt-1 mx-4 py-3 font-light text-sm md:text-sm lg:text-xl xl:font-normal xl:text-2xl 2xl:text-5xl text-gray-600 md:py-5 lg:py-8 xl:py-10 2xl:py-14'>Ensure all necessary documets are included and submitted within th especified deadlines.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 bg-cyan-500 rounded-t-lg lg:rounded-t-3xl ">
                    <h1 className='py-2 text-center pt-4 text-xl  font-medium md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white'>Track Application Status</h1>
                    <img className='rounded-t-lg lg:rounded-t-3xl w-full h-40 lg:h-72' src={admission4} alt="" />
                    <div className="bg-white">
                        <p className=' mt-1 mx-4 py-3 font-light text-sm md:text-sm lg:text-xl xl:font-normal xl:text-2xl 2xl:text-5xl text-gray-600 md:py-5 lg:py-8 xl:py-10 2xl:py-14'>Stay updated on your application status through our online portal.</p>
                        <p className=' mt-1 mx-4 py-3 font-light text-sm md:text-sm lg:text-xl xl:font-normal xl:text-2xl 2xl:text-5xl text-gray-600 md:py-5 lg:py-8 xl:py-10 2xl:py-14'>Regular updates will keep you informed about the progress of your application.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 bg-cyan-500 rounded-t-lg lg:rounded-t-3xl ">
                    <h1 className='py-2 text-center pt-4 text-xl  font-medium md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white'>Acceptance and Enrollment</h1>
                    <img className='rounded-t-lg lg:rounded-t-3xl w-full h-40 lg:h-72' src={admission5} alt="" />
                    <div className="bg-white">
                        <p className=' mt-1 mx-4 py-3 font-light text-sm md:text-sm lg:text-xl xl:font-normal xl:text-2xl 2xl:text-5xl text-gray-600 md:py-5 lg:py-8 xl:py-10 2xl:py-14'>Upon acceptance, follow the provided instructions to confirm your enrollment and commence your enriching experience at Muscat University.</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Admission