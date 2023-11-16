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
        <img src="https://images.unsplash.com/photo-1596941248238-0d49dcaa4263?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <p>1/5</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <p>2/5</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1579169825453-8d4b4653cc2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <p>3/5</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1612977512598-3b8d6a498bbb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <p>4/5</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1595737361672-ae84c6ca2298?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <p>5/5</p>
      </div>
    </Slider>
  );
};

export default MainSlide;