import React from 'react'

const SectionHeader = (props) => {
    return (
        <div className='flex flex-col items-center justify-center gap-3 text-white'>
            <h3 className='lg:text-base text-sm font-medium text-yellow-500 tracking-wider'>{props.section}</h3>
            <h2 className='lg:text-3xl text-xl font-semibold tracking-wide '>{props.title}</h2>
            <p className='lg:text-sm text-xs tracking-wider text-center text-gray-400'>{props.description}</p>
        </div>
    )
}

export default SectionHeader