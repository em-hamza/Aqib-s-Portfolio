import React from 'react'
import Slider from "react-slick";
import TestimonialCard from './TestimonialCard';

const ReviewsSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container mt-16">
            <Slider {...settings}>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />

            </Slider>
        </div>
    );
}

export default ReviewsSlider