import React, { useState } from 'react';
import { BiSupport } from 'react-icons/bi';
import { SiOpenproject } from 'react-icons/si';
import { SlBadge } from 'react-icons/sl';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counts = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div className='max-w-6xl mx-auto flex items-center justify-center z-20 -top-5 relative' ref={ref}>
            <div className='absolute bg-slate-700 flex items-center lg:gap-5 gap-2 lg:px-16 px-10 py-5 rounded-full text-white'>
                <div className='flex items-center gap-2 lg:w-40'>
                    <span className='bg-yellow-500 rounded-full p-2 hidden lg:block'><SlBadge className='text-[10px]' /></span>
                    <span className='flex flex-col'>
                        <h2 className='font-medium lg:text-base text-[10px]'>
                            {inView && <CountUp start={0} end={3} duration={1} />} Years Work
                        </h2>
                        <h2 className='font-medium lg:text-sm text-[10px] text-yellow-500 leading-4'>Experience</h2>
                    </span>
                </div>
                <div className='border-l-2 border-gray-400 opacity-50 lg:h-16 h-10'></div>
                <div className='flex items-center gap-2 lg:w-40'>
                    <span className='bg-yellow-500 rounded-full p-2 hidden lg:block'><SiOpenproject className='text-[10px]' /></span>
                    <span className='flex flex-col'>
                        <h2 className='font-medium lg:text-base text-[10px]'>
                            {inView && <CountUp start={0} end={100} duration={1.5} />}+ Projects
                        </h2>
                        <h2 className='font-medium lg:text-sm text-[10px] text-yellow-500 leading-4'>Completed</h2>
                    </span>
                </div>
                <div className='border-l-2 border-gray-400 opacity-50 lg:h-16 h-10'></div>
                <div className='flex items-center gap-2 lg:w-40'>
                    <span className='bg-yellow-500 rounded-full p-2 hidden lg:block'><BiSupport className='text-[10px]' /></span>
                    <span className='flex flex-col'>
                        <h2 className='font-medium lg:text-base text-[10px]'>Support</h2>
                        <h2 className='font-medium lg:text-sm text-[10px] text-yellow-500 leading-4'>Online 24/7</h2>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Counts;
