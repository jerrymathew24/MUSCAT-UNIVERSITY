import React from 'react'
import home from '../assets/home.avif'


const Home = () => {
    return (
        <div className="w-full">
            <div className=' flex h-screen items-center absolute'>
                <h1 className='md:max-w-[1480px] max-w-[600px] max-w-300 text-white m-[25px]  flex items-center  text-4xl'>ADMISSIONS</h1>
            </div>
            <img className='w-full h-[300px]' src={home} alt="" />



        </div>
    );
}
export default Home