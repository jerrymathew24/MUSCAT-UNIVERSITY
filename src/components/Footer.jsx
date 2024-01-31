import React from 'react'
import logo from '../assets/logo.jpg'

const Footer = () => {
    return (
        <div className="p-5 bg-blue-950 text-white">
            <div className="grid grid-cols-1 md:grid-cols-5  gap-11 m-11">
                <ul className=''>
                    <li className=''><h1 className='text-xl  font-normal'>QUICK CONTACT</h1></li>
                    <hr className="border-t-2 border-orange-600 my-2 w-16" />
                    <li className='py-2'><h1 className='font-light text-base'>Email</h1><p className='font-extralight text-sm'>email@gmail.com</p></li>
                    <li className='py-2'><h1 className='font-light text-base'>For general enquires</h1><p className='font-extralight text-sm'>324791253</p></li>
                    <li className='py-2'><h1 className='font-light text-base'>For programmes enquires</h1><p className='font-extralight text-sm'>324791234 / 324791235</p></li>
                    <div className="flex space-x-4">
                        {/* <span className="inline-block">
                            <img
                                className=" h-10 "
                                src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
                                alt="Your Alt Text"
                            />
                        </span>
                        <span className="inline-block">
                            <img
                                className="h-10 "
                                src="https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg"
                                alt="Your Alt Text"
                            />
                        </span> */}
                        <span className="inline-block">
                            <img
                                className="h-10 "
                                src="https://www.svgrepo.com/show/183624/linkedin.svg"
                                alt="Your Alt Text"
                            />
                        </span>
                        <span className="inline-block">
                            <img
                                className="h-10 "
                                src="https://logowiki.net/uploads/logo/y/youtube-3.svg"
                                alt="Your Alt Text"
                            />
                        </span>
                        <span className="inline-block">
                            <img
                                className="h-10 "
                                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                                alt="Your Alt Text"
                            />
                        </span>
                    </div>
                </ul>
                <ul className=''>
                    <li className=''><h1 className='text-xl  font-normal'>STUDY AT MU</h1></li>
                    <hr className="border-t-2 border-orange-600 my-2 w-16" />
                    <li className='py-2'><h1 className='font-light text-base'>Pathway Programmes</h1></li>
                    <hr className="mb-4 border-t border-dotted  border-gray-500" />
                    <li className='py-2'><h1 className='font-light text-base'>UG Programmes</h1></li>
                    <hr className="mb-4 border-t border-dotted  border-gray-500" />
                    <li className='py-2'><h1 className='font-light text-base'>PG Programmes</h1></li>
                    <hr className="mb-4 border-t border-dotted  border-gray-500" />
                    <li className='py-2'><h1 className='font-light text-base'>Short Courses</h1></li>
                    <hr className="mb-4 border-t border-dotted  border-gray-500" />

                </ul>
                <ul className=''>
                    <li className=''><h1 className='text-xl  font-normal'>ADMISSIONS</h1></li>
                    <hr className="border-t-2 border-orange-600 my-2 w-16" />
                    <li className='py-2'><h1 className='font-light text-base'>Scholarships and Aids</h1></li>
                    <hr className="mb-4 border-t border-dotted  border-gray-500" />
                    <li className='py-2'><h1 className='font-light text-base'>How to Apply</h1></li>
                    <hr className="mb-4 border-t border-dotted  border-gray-500" />
                    <li className='py-2'><h1 className='font-light text-base'>Application Dashboard</h1></li>
                    <hr className="mb-4 border-t border-dotted  border-gray-500" />

                </ul>
                <ul className=''>
                    <li className=''><h1 className='text-xl  font-normal'>FACULTIES</h1></li>
                    <hr className="border-t-2 border-orange-600 my-2 w-16" />
                    <li className='py-2'><h1 className='font-light text-base'>Faculty of Engineering & Technology</h1></li>
                    <hr className="mb-4 border-t border-dotted  border-gray-500" />
                    <li className='py-2'><h1 className='font-light text-base'>Faculty of Bussiness & Management</h1></li>
                    <hr className="mb-4 border-t border-dotted  border-gray-500" />
                    <li className='py-2'><h1 className='font-light text-base'>Faculty of Transport & Logistics</h1></li>
                    <hr className="mb-4 border-t border-dotted  border-gray-500" />

                </ul>
                <ul className=''>
                    <li className=''><h1 className='text-xl  font-normal'>LIFE AT MU</h1></li>
                    <hr className="border-t-2 border-orange-600 my-2 w-16" />
                    <li className='py-2'><h1 className='font-light text-base'>Facilities</h1></li>
                    <hr className="mb-4 border-t border-dotted  border-gray-500" />
                    <li className='py-2'><h1 className='font-light text-base'>Support Services</h1></li>
                    <hr className="mb-4 border-t border-dotted  border-gray-500" />
                    <li className='py-2'><h1 className='font-light text-base'>Activities</h1></li>
                    <hr className="mb-4 border-t border-dotted  border-gray-500" />
                    <li className='py-2'><h1 className='font-light text-base'>Student Club</h1></li>
                    <hr className="mb-4 border-t border-dotted  border-gray-500" />

                </ul>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start space-x-0 sm:space-x-4 ">
                <div className="m-1">
                    <img className='h-10 ml-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmdaQfIJWPtNc4buePIr0ILnE63TwzOv1P1gWSN0cI2A&s" alt="" />
                    <p className='text-white text-center'>SCAN CODE TO <br /> APPLY</p>
                </div>
                <div className="m-5">
                    <p className='mb-12'>Copyright 2023 All Rights Reserved. | MU Privacy Policy</p>
                </div>
                <div className="m-10">
                    <img className='h-28 m-10 rounded-lg -my-14' src={logo} alt="" />
                </div>
                <div className="m-10">
                    <img className='h-28 m-10 rounded-lg -my-14' src="https://i.pinimg.com/474x/33/43/f4/3343f4867cdd679bf1511be8e7c04c6f.jpg" alt="" />
                </div>

            </div>

        </div>
    )
}

export default Footer