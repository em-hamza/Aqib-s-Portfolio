import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const TheProject = (props) => {
    return (
        <div className="relative lg:w-[32%] w-[99%] border border-gray-500 rounded-sm my-1 overflow-hidden group">
            <div className='absolute z-10 w-full h-full bg-black/70 hidden group-hover:flex flex-col justify-between p-2 text-white'>
                <span>
                    <h4 className='text-sm font-medium tracking-wide'>Website Title</h4>
                    <p className='text-sm tracking-wide mt-1 pr-8'>Short description of project Short description of project Short description of project</p>
                </span>
                <a href='/' className='w-fit flex items-center gap-1 text-sm tracking-wider underline hover:text-yellow-500'>Visit site <BsArrowUpRight size={12} />
                </a>
            </div>
            <img className='w-full rounded-xs font-light object-cover object-center group-hover:scale-105 duration-500' src={props.ProjectImgSrc} alt="Content Not Found" />
        </div>
    )
}

export default TheProject
