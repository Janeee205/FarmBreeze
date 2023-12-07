import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MainSlide.css';

const MainSlide = () => {
  const settings = {
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'liner'
  };

  let slide = ['slide01', 'slide02', 'slide03', 'slide04', 'slide05'];
  
  return (
    <Slider {...settings}>
      {
        slide.map((item, index) => {
          index = index + 1;

          return (
            <div key={index}>
              <img src={`/images/${item}.png`} alt={item}/>
              <p>{`${index}/5`}</p>
            </div>
          )
        })
      }
    </Slider>
  );
};

export default MainSlide;