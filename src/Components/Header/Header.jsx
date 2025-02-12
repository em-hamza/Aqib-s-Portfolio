import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollThreshold = window.innerHeight;

            if (currentScrollY > scrollThreshold) {
                const isScrollingDown = currentScrollY > prevScrollY.current;
                setIsVisible(!isScrollingDown);
            } else {
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
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <section className={`sticky top-0 left-0 z-50 bg-black transition-transform duration-300 ${!isVisible ? '-translate-y-full' : 'translate-y-0'}`}>
            <header className="w-full bg-black shadow-lg max-w-6xl mx-auto flex justify-between items-center p-4">
                <a href="/" className="font-semibold text-2xl tracking-wider text-yellow-500">
                    AQIB
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 font-medium text-base tracking-wide text-white">
                    {['#intro', '#services', '#portfolio', '#testimonial'].map((item, index) => (
                        <a
                            key={index}
                            href={item}
                            className="nav-link"
                            onClick={(e) => handleScroll(e, item)}
                        >
                            {item.replace('#', '').charAt(0).toUpperCase() + item.slice(2)}
                        </a>


                    ))}
                    <a
                        href="#contact"
                        className="relative w-fit px-5 py-1 overflow-hidden border border-yellow-500 rounded-full transition-all 
                        before:absolute before:top-0 before:left-0 before:right-0 before:z-0 before:h-full before:w-0 
                        before:bg-yellow-500 before:transition-all before:duration-500 hover:text-black hover:before:left-0 hover:before:w-full"
                        onClick={(e) => handleScroll(e, '#contact')}
                    >
                        <span className="relative z-10 tracking-wide font-medium">Contact</span>
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </header>

            {/* Mobile Navigation */}
            <div className={`md:hidden px-2 flex flex-col items-center bg-black text-white pt-2 pb-8 rounded-b-3xl absolute top-full left-0 w-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {['#intro', '#services', '#portfolio', '#testimonial', '#contact'].map((item, index) => (
                    <a
                        key={index}
                        href={item}
                        className="px-2 mt-1 text-base border-b border-gray-500 w-full"
                        onClick={(e) => handleScroll(e, item)}
                    >
                        {item.replace('#', '').charAt(0).toUpperCase() + item.slice(2)}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Header;
