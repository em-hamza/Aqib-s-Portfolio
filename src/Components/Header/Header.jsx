import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollThreshold = window.innerHeight;

            if (currentScrollY > scrollThreshold) {
                // Hide header when scrolling down, show when scrolling up
                const isScrollingDown = currentScrollY > prevScrollY.current;
                setIsVisible(!isScrollingDown);
            } else {
                // Always show header when above 100vh
                setIsVisible(true);
            }

            prevScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className={`sticky top-0 left-0 z-50 bg-black transition-transform duration-300 ${!isVisible ? '-translate-y-full' : 'translate-y-0'
            }`}>
            <header className="w-full bg-black shadow-lg max-w-7xl mx-auto flex justify-between items-center p-4">
                <a href="/" className="font-semibold text-2xl tracking-wider text-yellow-500">
                    AQIB
                </a>
                <div className="flex items-center justify-between gap-8 font-medium text-base tracking-wide text-white">
                    <a href="#intro" className="nav-link" onClick={(e) => handleScroll(e, '#intro')}>
                        Intro
                    </a>
                    <a href="#services" className="nav-link" onClick={(e) => handleScroll(e, '#services')}>
                        Services
                    </a>
                    <a href="#portfolio" className="nav-link" onClick={(e) => handleScroll(e, '#portfolio')}>
                        Portfolio
                    </a>
                    <a href="#testimonial" className="nav-link" onClick={(e) => handleScroll(e, '#testimonial')}>
                        Testimonial
                    </a>
                    <a
                        href="#footer"
                        className="relative w-fit px-5 py-1 overflow-hidden border border-yellow-500 rounded-full transition-all 
                        before:absolute before:top-0 before:left-0 before:right-0 before:z-0 before:h-full before:w-0 
                        before:bg-yellow-500 before:transition-all before:duration-500 hover:text-black hover:before:left-0 hover:before:w-full"
                        onClick={(e) => handleScroll(e, '#footer')}
                    >
                        <span className="relative z-10 tracking-wide font-medium">Contact</span>
                    </a>
                </div>
            </header>
        </section>
    );
};

export default Header;