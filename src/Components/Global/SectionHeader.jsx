import React from 'react'

const SectionHeader = (props) => {
    return (
        <div className='flex flex-col items-center justify-center gap-3 text-white'>
            <h3 className='text-base font-medium text-yellow-500 tracking-wider'>{props.section}</h3>
            <h2 className='text-3xl font-semibold tracking-wide '>{props.title}</h2>
            <p className='text-sm tracking-wider text-center text-gray-400'>{props.description}</p>
        </div>
    )
}

export default SectionHeader
    // <div div className = 'flex flex-col items-center justify-center gap-3 text-white' >
    //         <h3 className='text-base font-medium text-yellow-500 tracking-wider'>SERVICES</h3>
    //         <h2 className='text-3xl font-semibold tracking-wide '>   </h2>
    //         <p className='text-sm tracking-wider text-center text-gray-400'> PLAN, DESIGN, BUILD AND MARKET HIGH  QUALITY PRODUCTS </p>
    //     </div >