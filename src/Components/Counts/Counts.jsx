import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { SiOpenproject } from 'react-icons/si'
import { SlBadge } from 'react-icons/sl'

const Counts = () => {
    return (
            <div className='max-width flex items-center justify-center '>
                <div className='absolute bg-slate-700 flex items-center gap-5 px-16 py-5 rounded-full text-white'>
                    <div className='flex items-center gap-2'>
                        <span className='bg-yellow-500 rounded-full p-2 '><SlBadge size={20} /></span>
                        <span className='flex flex-col'>
                            <h2 className='font-medium text-base'>3 Years Work</h2>
                            <h2 className='font-medium text-sm text-yellow-500 leading-4'>Experience</h2>
                        </span>
                    </div>
                    <div className='border-l-2 border-gray-400 opacity-50 h-16'></div>
                    <div className='flex items-center gap-2'>
                        <span className='bg-yellow-500 rounded-full p-2 '><SiOpenproject size={20} /></span>
                        <span className='flex flex-col'>
                            <h2 className='font-medium text-base'>100+ Projects</h2>
                            <h2 className='font-medium text-sm text-yellow-500 leading-4'>Completed</h2>
                        </span>
                    </div>
                    <div className='border-l-2 border-gray-400 opacity-50 h-16'></div>
                    <div className='flex items-center gap-2'>
                        <span className='bg-yellow-500 rounded-full p-2 '><BiSupport size={20} /></span>
                        <span className='flex flex-col'>
                            <h2 className='font-medium text-base'>Support</h2>
                            <h2 className='font-medium text-sm text-yellow-500 leading-4'>Online 24/7</h2>
                        </span>
                    </div>
                </div>
             </div>
    )
}

export default Counts
