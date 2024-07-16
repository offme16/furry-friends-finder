import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cls from './SliderComponent.module.scss';

interface SliderProps {
  slides: Array<string>;
}

const SliderComponent: React.FC<SliderProps> = ({ slides }) => {
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={cls.slide}>
            <img src={slide} alt={`image${index}`} className={cls.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
