import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project1 from '../../Assets/Projects/project1.webp'
import project2 from '../../Assets/Projects/project2.webp'
import project3 from '../../Assets/Projects/project3.webp'
import project4 from '../../Assets/Projects/project4.webp'
import project5 from '../../Assets/Projects/project5.webp'
import project6 from '../../Assets/Projects/project6.webp'

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 5000,
    arrows: false,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  return (
    <section className="w-full py-7 bg-white -top-5 relative z-10">
      <Slider {...settings}>
        {[project1, project2, project3, project4, project5, project6].map(
          (project, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={project}
                alt=""
                className="w-[130px] h-[130px] object-contain"
              />
            </div>
          )
        )}
      </Slider>
    </section>
  );
}

export default AutoPlay;