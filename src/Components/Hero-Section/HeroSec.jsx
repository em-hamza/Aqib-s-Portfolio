import React from 'react'
import { motion } from "framer-motion";
import character from '../../Assets/General/character.png'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialSkype } from 'react-icons/ti';

const HeroSec = () => {
    const name = "I'm AQIB ALI";

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            transition: { staggerChildren: 0.1 },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    };

    return (
        <section className='bg-slate-900 relative z-10' id='intro'>
            <div className='relative max-w-6xl mx-auto p-4 flex flex-col md:flex-row items-center justify-between overflow-hidden'>
                <div className='w-full md:w-7/12 flex flex-col text-white tracking-wide lg:py-20 py-16'>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className='lg:text-xl text-lg font-semibold'
                    >
                        Hi there,
                    </motion.h2>

                    <motion.h1
                        className='text-yellow-500 lg:text-4xl md:text-5xl text-3xl font-semibold  tracking-[-1px]'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {name.split("").map((char, index) => (
                            <motion.span key={index} variants={letterVariants}>
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className='lg:text-lg text-sm font-light pt-5'
                    >
                        I'm a professional web developer and UI/UX designer with a passion for designing and developing beautiful and functional user experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className='flex items-center gap-5 text-white my-5'>
                        {[TiSocialFacebook, TiSocialSkype, TiSocialLinkedin].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="relative inline-flex items-center justify-center transition-all duration-700 border border-white hover:border-yellow-500 p-1 rounded-full overflow-hidden group"
                            >
                                <span className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-yellow-500 rounded-full group-hover:w-10 group-hover:h-10"></span>
                                <span className="relative transition-all duration-700 group-hover:text-black">
                                    <Icon className='lg:text-2xl text-base' />
                                </span>
                            </a>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className='flex items-center gap-4'>
                        <a href='/' className='relative w-fit lg:px-5 px-3 py-1 overflow-hidden border border-white rounded-full transition-all before:absolute before:top-0 before:left-0 before:right-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-black hover:before:left-0 hover:before:w-full'>
                            <span className="relative lg:bottom-0 bottom-0.5 z-10 tracking-wide lg:text-base text-xs font-medium">
                                View Portfolio
                            </span>
                        </a>
                        <a href='/' className='relative w-fit lg:px-5 px-3 py-1 overflow-hidden border border-yellow-500 rounded-full transition-all before:absolute before:top-0 before:left-0 before:right-0 before:z-0 before:h-full before:w-0 before:bg-yellow-500 before:transition-all before:duration-500 hover:text-black hover:before:left-0 hover:before:w-full'>
                            <span className="relative lg:bottom-0 bottom-0.5 z-10 tracking-wide lg:text-base text-xs font-medium">
                                Hire Me
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* Hide image on small screens */}
                <motion.img
                    src={character}
                    className='hidden md:block absolute bottom-0 right-0 h-[450px]'
                    initial={{ marginBottom: "-100%" }}
                    animate={{ marginBottom: "0" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </div>
        </section>
    )
}

export default HeroSec;
