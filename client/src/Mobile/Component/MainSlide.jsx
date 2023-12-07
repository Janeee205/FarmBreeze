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
  
  return (
    <Slider {...settings}>
      <div>
        <img src="/images/slide01.png" alt="" />
        <p>1/5</p>
      </div>
      <div>
        <img src="/images/slide02.png" alt="" />
        <p>2/5</p>
      </div>
      <div>
        <img src="/images/slide03.png" alt="" />
        <p>3/5</p>
      </div>
      <div>
        <img src="/images/slide04.png" alt="" />
        <p>4/5</p>
      </div>
      <div>
        <img src="/images/slide05.png" alt="" />
        <p>5/5</p>
      </div>
    </Slider>
  );
};

export default MainSlide;