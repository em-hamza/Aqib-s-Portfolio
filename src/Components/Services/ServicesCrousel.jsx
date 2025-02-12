import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import app_dev from "../../Assets/Services/app-dev.webp";
import web_dev from "../../Assets/Services/web-dev.webp";
import web_design from "../../Assets/Services/web-design.webp";
import './Swipper.css'

const services = [
    {
        title: "Web Development",
        subtitle: "Building the Future Online.",
        description:
            "Custom websites, e-commerce solutions, design, development, optimization, user experience.",
        points: [
            "Custom Website Development",
            "E-commerce Solutions",
            "Performance Optimization",
            "User Experience Design",
        ],
        image: web_dev,
        linkText: "Explore Web Development",
    },
    {
        title: "Web Design",
        subtitle: "Designing Digital Experiences.",
        description:
            "Creative, responsive web design, user-focused, brand alignment, mobile optimization.",
        points: [
            "Responsive Web Design",
            "User-Centered Design",
            "Brand Alignment",
            "Mobile Optimization",
        ],
        image: web_design,
        linkText: "Explore Web Design",
    },
    {
        title: "App Development",
        subtitle: "Innovative Mobile Solutions.",
        description:
            "Custom app development, design, integration, testing, and user experience.",
        points: [
            "Custom App Development",
            "Cross-Platform Compatibility",
            "User Experience Design",
            "App Testing & Deployment",
        ],
        image: app_dev,
        linkText: "Explore App Development",
    },
];

const Card = ({ title, subtitle, description, points, image }) => (
    <div className="relative group h-[75vh] rounded-3xl">
        <img
            className="w-full h-full object-cover object-center rounded-3xl transition-transform duration-1000  grayscale group-hover:scale-110 group-hover:grayscale-0 brightness-50"
            src={image}
            alt={title}
        />
        <div className="absolute inset-0 flex flex-col md:flex-row bg-black/50 p-10 text-white">
            {/* Left Section */}
            <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                    <h2 className="lg:text-[3vw] text-2xl font-semibold">{title}</h2>
                    <p className="lg:text-[1.7vw] text-xl mb-4">{subtitle}</p>
                </div>
                <div>
                    <p className="text-[12px] lg:text-[1.3vw]">{description}</p>
                    <ul className="mt-4 space-y-2 text-[12px] md:text-[14px] lg:text-[1.2vw]">
                        {points.map((point, index) => (
                            <li key={index}>✱ {point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

const ServicesCarousel = () => (
    <div className="relative z-10">
        <Swiper navigation modules={[Navigation]} className="mySwiper rounded-3xl cursor-grab">
            {services.map((service, index) => (
                <SwiperSlide key={index}>
                    <Card {...service} />
                </SwiperSlide>
            ))}
        </Swiper>


    </div>
);

export default ServicesCarousel;
