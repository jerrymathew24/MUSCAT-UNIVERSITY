import React, { useState } from 'react';

const TabAccordian = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="m-10  grid place-items-center min-h-screen ">
            <div className="tab-section bg-white rounded-lg p-5 border-none w-full min-h-[400px] backdrop-filter backdrop-blur-lg bg-opacity-30">
                <div className="flex flex-wrap ">
                    <button
                        className={`p-4 text-blue font-bold flex-grow w-80 border-blue-800 border-x border-t border-b-4 ${activeTab === 'tab1' ? 'bg-blue-800' : ''
                            }  ${activeTab !== 'tab1' ? 'text-blue-800' : ''
                            }`}
                        onClick={() => handleTabClick('tab1')}
                    >
                        Under graduate Admission Requirements
                    </button>
                    <button
                        className={`p-4 text-blue font-bold flex-grow w-80 border-blue-800  border-x border-t border-b-4  ${activeTab === 'tab2' ? 'bg-blue-800' : ''
                            }  ${activeTab !== 'tab2' ? 'text-blue-800' : ''
                            }`}
                        onClick={() => handleTabClick('tab2')}
                    >
                        Post graduate Admission Requirements
                    </button>
                </div>
                <div className="mt-4">
                    <div id="tab1" className={`tab-content text-black  ${activeTab === 'tab1' ? '' : 'hidden'}`}>
                        <div className="">
                            <p className='m-3 text-sm font-semibold'>Students interested in pursuing Undergraduate Programs at Muscut University are required to fulfill specific admission entry requirements</p>
                            <hr className="border-t-1 border-blue-500" />
                            <h1 className='m-3 text-xl font-semibold'>Program-Specific Requirements</h1>
                            <p className='m-3 text-gray-800 text-sm'>Some students might need to complete the Muscat University Foundation Program to meet the necessary criteria for enrollment into the Undergraduate Programs. Details regarding this requirement will be specified based on the program you apply for, please refer to the program page for the specific requirements.  </p>
                            <hr className="border-t-1 border-blue-500" />
                            <h1 className='m-3 text-xl font-semibold'>Supporting Documents</h1>
                            <p className='m-3 text-gray-800 text-sm'>To complete your application, please ensure the submission of the following documents.</p>
                            <ol className='m-3'>
                                <li className=' text-gray-800 text-sm'>1.   <span className='text-sm font-semibold'>School Leaving Certificate:</span> Submit certificates demonstrating that you meet the minimum educational requirements for your chosen program.</li>
                                <li className=' text-gray-800 text-sm'>2.   <span className='text-sm font-semibold'>ID Card/Passport Copy:</span> A copy of your identification card or passport is required for verification purposes.</li>
                                <li className=' text-gray-800 text-sm'>3.   <span className='text-sm font-semibold'>Passport Size Photograph:</span> Provide a recent passport-sized photograph as part of your application.</li>
                            </ol>
                            <p className='m-3 text-gray-800 text-sm'>The Admissions Team at Muscat University is committed to ensuring a smooth and transparent application process for all prospective undergraduate students. If you have any enquires regarding the adisssion requirements or need assistance, please don't hesitate to contact us. We are here to support you through every step of the application process.. </p>
                            <hr className="border-t-1 border-blue-500" />
                            <p className='m-3 text-gray-800 text-sm'><span className='text-sm font-semibold'>Note:</span> All documents must be in English. Documents in languages other than English require an English copy from your institute or a translation from a recognized ttranslation office. Failure to submit all required supporting documents will result in the liability of the Admissions Team to process your application.</p>
                        </div>
                    </div>
                    <div id="tab2" className={`tab-content text-black ${activeTab === 'tab2' ? '' : 'hidden'}`}>
                        <div className="">
                            <p className='m-3 text-sm font-semibold'>Students interested in pursuing  Post Graduate Programs at Muscut University are required to fulfill specific admission entry requirements</p>
                            <hr className="border-t-1 border-blue-500" />
                            <h1 className='m-3 text-xl font-semibold'>Program-Specific Requirements</h1>
                            <p className='m-3 text-gray-800 text-sm'>Some students might need to complete the Muscat University Foundation Program to meet the necessary criteria for enrollment into the Post Graduate Programs. Details regarding this requirement will be specified based on the program you apply for, please refer to the program page for the specific requirements.  </p>
                            <hr className="border-t-1 border-blue-500" />
                            <h1 className='m-3 text-xl font-semibold'>Supporting Documents</h1>
                            <p className='m-3 text-gray-800 text-sm'>To complete your application, please ensure the submission of the following documents.</p>
                            <ol className='m-3'>
                                <li className=' text-gray-800 text-sm'>1.   <span className='text-sm font-semibold'>School Leaving Certificate:</span> Submit certificates demonstrating that you meet the minimum educational requirements for your chosen program.</li>
                                <li className=' text-gray-800 text-sm'>2.   <span className='text-sm font-semibold'>ID Card/Passport Copy:</span> A copy of your identification card or passport is required for verification purposes.</li>
                                <li className=' text-gray-800 text-sm'>3.   <span className='text-sm font-semibold'>Passport Size Photograph:</span> Provide a recent passport-sized photograph as part of your application.</li>
                            </ol>
                            <p className='m-3 text-gray-800 text-sm'>The Admissions Team at Muscat University is committed to ensuring a smooth and transparent application process for all prospective Post Graduate students. If you have any enquires regarding the adisssion requirements or need assistance, please don't hesitate to contact us. We are here to support you through every step of the application process.. </p>
                            <hr className="border-t-1 border-blue-500" />
                            <p className='m-3 text-gray-800 text-sm'><span className='text-sm font-semibold'>Note:</span> All documents must be in English. Documents in languages other than English require an English copy from your institute or a translation from a recognized ttranslation office. Failure to submit all required supporting documents will result in the liability of the Admissions Team to process your application.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabAccordian;
