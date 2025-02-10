import { div } from "framer-motion/client";
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = () => {
    return (
        <div className="relative w-[98%] h-96 rounded-2xl bg-slate-100 overflow-hidden">
            <div className="absolute bottom-0 w-full h-72 bg-white  px-5">
                <img className="relative bottom-10 mx-auto w-24 rounded-full border-4 border-slate-100 " src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
                <FaQuoteLeft className="relative -top-5 opacity-30" size={25} />
                <p className="text-sm text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores debitis non dicta perspiciatis, cupiditate in earum doloremque voluptatum aliquam aspernatur assumenda.</p>
                <div className="w-[calc(100%-50px)] absolute bottom-5 flex items-center justify-between">
                    <span>
                        <h2 className="tex-lg font-semibold">Jane Doe</h2>
                        <h2 className="text-xs font-medium leading-2.5">CEO, Company</h2>
                    </span>
                    <span className="flex gap-1">
                        <FaStar size={15} />
                        <FaStar size={15} />
                        <FaStar size={15} />
                        <FaStar size={15} />
                        <FaStar size={15} className="opacity-45"/>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
