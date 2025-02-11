import React from 'react'
import SectionHeader from '../Global/SectionHeader'
import Service from './Service'

const Services = () => {
    return (
        <section className='bg-slate-800 pt-16 relative z-10' id='services'>
            <div className='max-width p-4 '>
                <SectionHeader
                    section="SERVICES"
                    title="What I'm Great At"
                    description="PLAN, DESIGN, BUILD AND MARKET HIGH  QUALITY PRODUCTS"
                />
                <div className='flex items-center justify-center gap-10 py-10'>
                    <Service />
                    <Service />
                    <Service />
                </div>

            </div>
        </section>
    )
}

export default Services
