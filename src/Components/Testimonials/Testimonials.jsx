import React from 'react'
import SectionHeader from '../Global/SectionHeader'
import ReviewsSlider from './ReviewsSlider'

const Testimonials = () => {
    return (
        <section className='bg-slate-800 py-10' id='testimonial'>
            <div className='max-width p-4 '>
                <SectionHeader
                    section="TESTIMONIAL"
                    title="SUCCESS SPEAKS FOR ITSELF"
                />

                <ReviewsSlider />


            </div>
        </section>
    )
}

export default Testimonials
