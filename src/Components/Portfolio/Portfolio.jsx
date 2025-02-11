import React from 'react'
import SectionHeader from '../Global/SectionHeader'
import Tabs from './Tabs'

const Portfolio = () => {
    return (
        <section className='bg-slate-900 py-10 relative z-10 rounded-t-4xl -top-5' id='portfolio'>
            <div className='max-width p-4'>
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
