import React from 'react'
import { motion } from "framer-motion";
import character from '../../Assets/General/character.png'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialSkype } from 'react-icons/ti';

const HeroSec = () => {
    const name = String("I'm AQIB ALI");

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            transition: {
                staggerChildren: 0.1, // Each letter appears one after another
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    };

    return (
        <section className='bg-slate-900 relative z-10 ' id='intro'>
            <div className='relative max-width p-4 flex items-center justify-between overflow-hidden'>
                <div className='w-7/12 flex flex-col text-white tracking-wide py-20'>
                    <h2 className='text-xl font-semibold'>Hi there,</h2>
                    <motion.h1
                        className='text-yellow-500 text-4xl font-semibold tracking-[-4px]'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {name.split("").map((char, index) => (
                            <motion.span key={index} variants={letterVariants}>
                                {char === " " ? "\u00A0" : char} {/* Keeps spaces */}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <p className='text-lg font-light  pt-5'>I'm a professional web developer and UI/UX designer with a passion for designing and developing beautiful and functional user experiences.</p>

                    <div className='flex items-center gap-5 text-white my-5'>
                        <a href="" class="relative inline-flex items-center justify-center transition-all duration-700 border border-white hover:border-yellow-500 p-1 rounded-full overflow-hidden group ">
                            <span class="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-yellow-500 rounded-full group-hover:w-10 group-hover:h-10 "></span>
                            <span class="relative transition-all duration-700 group-hover:text-black"><TiSocialFacebook size={25} /></span>
                        </a>
                        <a href="" class="relative inline-flex items-center justify-center transition-all duration-700 border border-white hover:border-yellow-500 p-1 rounded-full overflow-hidden group ">
                            <span class="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-yellow-500 rounded-full group-hover:w-10 group-hover:h-10 "></span>
                            <span class="relative transition-all duration-700 group-hover:text-black"><TiSocialSkype size={25} /></span>
                        </a>
                        <a href="" class="relative inline-flex items-center justify-center transition-all duration-700 border border-white hover:border-yellow-500 p-1 rounded-full overflow-hidden group ">
                            <span class="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-yellow-500 rounded-full group-hover:w-10 group-hover:h-10 "></span>
                            <span class="relative transition-all duration-700 group-hover:text-black"><TiSocialLinkedin size={25} /></span>
                        </a>

                    </div>



                    <div className='flex items-center gap-4 '>
                        <a href='/' className='relative w-fit px-5 py-1 overflow-hidden border border-white rounded-full transition-all before:absolute before:top-0 before:left-0 before:right-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-black hover:before:left-0 hover:before:w-full'>
                            <span className="relative z-10 tracking-wide font-medium">
                                View Portfolio
                            </span>
                        </a>
                        <a href='/' className='relative w-fit px-5 py-1 overflow-hidden border border-yellow-500 rounded-full transition-all before:absolute before:top-0 before:left-0 before:right-0 before:z-0 before:h-full before:w-0 before:bg-yellow-500 before:transition-all before:duration-500 hover:text-black hover:before:left-0 hover:before:w-full'>
                            <span className="relative z-10 tracking-wide font-medium">
                                Hire Me
                            </span>
                        </a>
                    </div>
                </div>

                <motion.img src={character} className='absolute bottom-0 right-0 h-[450px]'
                    initial={{ marginBottom: "-100%" }}
                    animate={{ marginBottom: "0" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </div>
        </section>
    )
}

export default HeroSec



