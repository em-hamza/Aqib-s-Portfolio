import React from 'react'
import SectionHeader from '../Global/SectionHeader'
import Tabs from './Tabs'

const Portfolio = () => {
    return (
        <section className='bg-slate-900 py-10 relative z-10 rounded-t-4xl -top-10' id='portfolio'>
            <div className='max-w-7xl mx-auto p-4'>
                <SectionHeader
                    section="PORTFOLIO"
                    title="Explore My Projects"
                    description="DISCOVER OUR INNOVATIVE AND CREATIVE PROJECTS SHOWCASE"
                />
                <Tabs />

            </div>
        </section>
    )
}

export default Portfolio
