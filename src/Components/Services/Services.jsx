import React from 'react'
import SectionHeader from '../Global/SectionHeader'
import ServicesCrousel from './ServicesCrousel'

const Services = () => {
    return (
        <section className='bg-slate-800 pt-24 relative z-10 -top-5   -bottom-5' id='services'>
            <div className='max-w-7xl mx-auto p-4 '>
                <SectionHeader
                    section="SERVICES"
                    title="What I'm Great At"
                    description="PLAN, DESIGN, BUILD AND MARKET HIGH  QUALITY PRODUCTS"
                />
                <div className='py-10'>
                    <ServicesCrousel />
                </div>

            </div>
        </section>
    )
}

export default Services
