import React from 'react'
import SectionHeader from '../Global/SectionHeader'
import ReviewsSlider from './ReviewsSlider'
import Masonry from '../../External/Mansory/Mansory';
import img_1 from '../../Assets/Reviews/1.png'
import img_2 from '../../Assets/Reviews/2.png'
import img_3 from '../../Assets/Reviews/3.png'
import img_4 from '../../Assets/Reviews/4.png'
import img_5 from '../../Assets/Reviews/5.png'
import img_6 from '../../Assets/Reviews/6.png'
import img_7 from '../../Assets/Reviews/7.png'
import img_8 from '../../Assets/Reviews/8.png'
import img_9 from '../../Assets/Reviews/9.png'
import img_10 from '../../Assets/Reviews/10.png'
import img_11 from '../../Assets/Reviews/11.png'
import img_12 from '../../Assets/Reviews/12.png'
import img_13 from '../../Assets/Reviews/13.png'
import img_14 from '../../Assets/Reviews/14.png'
import img_15 from '../../Assets/Reviews/15.png'


const Testimonials = () => {
    const data = [
        { id: 1, image: img_1, height: 200 },
        { id: 2, image: img_2, height: 200 },
        { id: 3, image: img_3, height: 200 },
        { id: 4, image: img_4, height: 210 },
        { id: 5, image: img_5, height: 210 },
        { id: 6, image: img_6, height: 180 },
        { id: 7, image: img_7, height: 200 },
        { id: 8, image: img_8, height: 280 },
        { id: 9, image: img_9, height: 180 },
        { id: 10, image: img_10, height: 280 },
        { id: 11, image: img_11, height: 200 },
        { id: 12, image: img_12, height: 200 },
        { id: 13, image: img_13, height: 200 },
        { id: 14, image: img_14, height: 200 },
        { id: 15, image: img_15, height: 200 },
    ];
    return (
        <section className='bg-slate-800 py-10 relative z-10 rounded-b-3xl -top-10' id='testimonial'>
            <div className='max-width p-4 '>
                <SectionHeader
                    section="TESTIMONIAL"
                    title="SUCCESS SPEAKS FOR ITSELF"
                />

                {/* <ReviewsSlider /> */}
                <div className='pt-5'></div>
                <Masonry data={data} />



            </div>
        </section>
    )
}

export default Testimonials
