import React, { useState } from 'react';
import TheProject from './TheProject';
import img1 from '../../Assets/MyProjects/project1.jpg';
import img2 from '../../Assets/MyProjects/project2.jpg';
import img3 from '../../Assets/MyProjects/project3.jpg';
import img4 from '../../Assets/MyProjects/project4.jpg';
import img5 from '../../Assets/MyProjects/project5.jpg';
import img6 from '../../Assets/MyProjects/project6.jpg';
import img7 from '../../Assets/MyProjects/project7.jpg';
import img8 from '../../Assets/MyProjects/project8.jpg';
import img9 from '../../Assets/MyProjects/project9.jpg';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('ALL');

    const renderContent = () => {
        switch (activeTab) {
            case 'ALL':
                return <div className='w-full flex  items-center justify-center gap-5 flex-wrap'>
                    <TheProject ProjectImgSrc={img1} />
                    <TheProject ProjectImgSrc={img2} />
                    <TheProject ProjectImgSrc={img3} />
                    <TheProject ProjectImgSrc={img4} />
                    <TheProject ProjectImgSrc={img5} />
                    <TheProject ProjectImgSrc={img6} />
                </div>;
            case 'PHOTOGRAPHY':
                return <div className='w-full flex gap-5 justify-start '>
                    <TheProject ProjectImgSrc={img4} />
                </div>;
            case 'DESIGN':
                return <div className='w-full flex items-center justify-start gap-5 flex-wrap'>
                    <TheProject ProjectImgSrc={img1} />
                    <TheProject ProjectImgSrc={img2} />
                    <TheProject ProjectImgSrc={img7} />
                    <TheProject ProjectImgSrc={img9} />
                </div>;
            case 'MOBILE':
                return <div className='w-full flex items-center justify-start gap-5 flex-wrap'>
                    <TheProject ProjectImgSrc={img3} />
                    <TheProject ProjectImgSrc={img5} />
                </div>;
            case 'MARKETING':
                return <div className='w-full flex items-center justify-start gap-5 flex-wrap'>
                    <TheProject ProjectImgSrc={img6} />
                </div>;
            default:
                return null;
        }
    };

    return (
        <section className="">

            <div className="flex space-x-1 items-center justify-center py-10">
                {['ALL', 'PHOTOGRAPHY', 'DESIGN', 'MOBILE', 'MARKETING'].map((tab) => (
                    <button
                        key={tab}
                        className={`roboto text-[11px] px-1 lg:px-6 lg:py-2 lg:text-sm uppercase tracking-wide transition-all duration-300 
      ${activeTab === tab ? 'border-b-2 border-white text-white font-semibold' : 'border-b-2 border-transparent text-gray-500 hover:text-white'}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="p-4">
                {renderContent()}
            </div>
        </section>
    );
};

export default Tabs;

