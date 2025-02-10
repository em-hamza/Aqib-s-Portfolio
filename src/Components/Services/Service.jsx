import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { SiSemanticweb } from 'react-icons/si'
import coding from '../../Assets/Services/coding.jpeg'

const Service = () => {
    return (
        <div className='relative bg-slate-900 border border-gray-700 rounded-lg p-4 w-[calc(33%-50px)] group overflow-hidden'>
            <img
                className="absolute top-0 left-0 h-full w-full opacity-15 group-hover:scale-105 duration-500"
                src={coding}
                alt=""
            />
            <div className='relative z-10 border border-gray-700 rounded-lg px-4 py-14 flex flex-col justify-center gap-3 text-white'>
                <SiSemanticweb size={50} className='text-gray-300' />
                <h4 className='text-xl font-medium text-yellow-500 tracking-wide'>Web Development</h4>
                <p className='text-sm text-gray-300 pr-4'>Designing fast, responsive websites with modern aesthetics and seamless functionality to enhance user experience and boost business growth.</p>
                <a href="/" className='w-fit text-sm font-light flex items-center underline mt-2 hover:text-yellow-500 transition-all duration-300'>Read more <MdOutlineKeyboardDoubleArrowRight size={14} className='mt-1 ml-1' /></a>
            </div>
        </div>
    )
}

export default Service
