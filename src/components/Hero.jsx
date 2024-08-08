import React from 'react'

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
            id: 1,
            img: "/coverphoto2.png",
            title: "Bio Spray Plus",
            mainTitle: "Bio Spray Plus",
            price: "$30",  
        },
    ];

  return (
    <div>
      Hero
    </div>
  )
}

export default Hero
