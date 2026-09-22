// import React from 'react';
import  HeroImage from './assets/banner-stack.png'

const Hero = () => {
    return (
        <div className='container mx-auto px-4 py-16'>

        <div className=' flex flex-col lg:flex-row justify-between gap-10 items-center  '>
          <div className=' w-full lg:w-1/2'>
            <p className='font-black text-4xl   md:text-5xl lg:6xl pb-5'>Build Your Ideal
            <span className='bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent'> Development  Stack</span></p>
            <p className='font-light text-gray-500  md:text-lg mb-7'>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.</p>
                      <div className='flex gap-4'>
                        <button className="btn btn-outline  bg-gradient-to-r from-orange-500 to-purple-600 text-white  ">
Explore Technologies</button>
            <button className=' btn btn-outline hover:bg-gray-100'>Learn More</button>
                      </div>
          </div>
          <div className='w-full flex justify-center lg:1/2'>
            <img src={HeroImage} alt="Development Stack" className='w-full object-contain max-w-lg' />
          </div>
        </div>
        </div>
    );
};

export default Hero;