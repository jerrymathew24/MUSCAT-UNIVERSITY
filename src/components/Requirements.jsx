import React from 'react'
import TabAccordian from './TabAccordian'

const Requirements = () => {
    return (
        <div className="p-10 mx-10">
            <h1 className="mt-10 text-xl  font-normal lg:text-4xl xl:text-5xl xl:font-medium 2xl:text-6xl">ADMISSION REQUIREMENTS
            </h1>
            <hr className="border-t-2 lg:border-t-2 xl:border-t-8 border-orange-600 my-2 w-16 xl:w-44 mb-5" />

            <TabAccordian />
        </div>
    )
}

export default Requirements
