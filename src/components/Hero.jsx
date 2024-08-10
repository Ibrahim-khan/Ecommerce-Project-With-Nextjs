"use client";

import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';

const Hero = () => {

    var setting = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/coverphoto.png",
            title: "Bio Spray Plus",
            mainTitle: "Bio Spray Plus",
            price: "$20",
        },
        {
            id: 1,
            img: "/coverphoto1.png",
            title: "Bio Spray Plus",
            mainTitle: "Bio Spray Plus",
            price: "$15", 
        },
        {
            id: 2,
            img: "/coverphoto2.png",
            title: "Bio Spray Plus",
            mainTitle: "Bio Spray Plus",
            price: "$30",  
        },
    ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...setting}>
          {
            slideData.map((item) => (
              <Slide
                key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
