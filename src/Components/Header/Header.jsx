import React from 'react'

const Header = () => {
    return (
        <section className='bg-black'>
            <header className='max-width flex justify-between items-center p-4'>
                <a href='/' className='font-semibold text-2xl tracking-wider text-yellow-500'>AQIB</a>
                <div className='flex items-center justify-between gap-8 font-medium text-base tracking-wide text-white'>            
                    <a href='#intro' className='nav-link'>Intro</a>
                    <a href='#services' className='nav-link'>Services</a>
                    <a href='#portfolio' className='nav-link'>Portfolio</a>
                    <a href='#testimonial' className='nav-link'>Testimonial</a>
                    <a href='/' className='relative w-fit px-5 py-1 overflow-hidden border border-yellow-500 rounded-full transition-all before:absolute before:top-0 before:left-0 before:right-0 before:z-0 before:h-full before:w-0 before:bg-yellow-500 before:transition-all before:duration-500 hover:text-black hover:before:left-0 hover:before:w-full'>
                        <span className="relative z-10 tracking-wide font-medium">
                            Contact
                        </span>
                    </a>
                </div>
            </header>
        </section>
    )
}

export default Header
