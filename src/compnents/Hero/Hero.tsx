// import React, { useEffect } from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';


// const Hero: React.FC = () => {
 

//   return (
//     <section classNameName="hero-section">
//       <div classNameName="container">
//         <div classNameName="row">
//           <div classNameName="col-lg-6">
//             <div classNameName="hero-text">
//               <h1>Sona A Luxury Hotel</h1>
//               <p>Best hotel booking sites...</p>
//               <a href="#" classNameName="primary-btn">Discover Now</a>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <OwlCarousel classNameName="hero-slider" loop margin={10} items={1} autoplay>
//         <div classNameName="hs-item" style={{ backgroundImage: `url(assets/img/hero/hero-1.jpg)` }}></div>
//         <div classNameName="hs-item" style={{ backgroundImage: `url(/img/hero/hero-2.jpg)` }}></div>
//         <div classNameName="hs-item" style={{ backgroundImage: `url(/img/hero/hero-3.jpg)` }}></div>
//       </OwlCarousel> */}
//      <OwlCarousel id="customer-testimonoals" classNameName="hero-slider" >
//         <div classNameName="hs-item" style={{ backgroundImage: `url(assets/img/hero/hero-1.jpg)` }}></div>
//         <div classNameName="hs-item" style={{ backgroundImage: `url(/img/hero/hero-2.jpg)` }}></div>
//         <div classNameName="hs-item" style={{ backgroundImage: `url(/img/hero/hero-3.jpg)` }}></div>
//     </OwlCarousel> 

//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

import photo_1 from "../../assets/img/hero/hero-1.jpg";
import photo_2 from "../../assets/img/hero/hero-2.jpg";
import photo_3 from "../../assets/img/hero/hero-3.jpg";

const Hero: React.FC = () => {

  const images = [
    {
      url: photo_1,
      alternativeText: "Sweden Photo One"
    },
    {
      url: photo_2,
      alternativeText: "Sweden Photo Two"
    },
    {
      url: photo_3,
      alternativeText: "Sweden Photo Three"
    }
  ];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-text">
              <h1>Sona A Luxury Hotel</h1>
              <p>Here are the best hotel booking sites, including recommendations for international
                travel and for finding low-priced hotel rooms.</p>
              <a href="#" className="primary-btn">Discover Now</a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
            <div className="booking-form">
              <h3>Booking Your Hotel</h3>
              <form action="#">
                <div className="check-date">
                  <label>Check In:</label>
                  <input type="text" className="date-input" id="date-in" />
                  <i className="icon_calendar"></i>
                </div>
                <div className="check-date">
                  <label>Check Out:</label>
                  <input type="text" className="date-input" id="date-out" />
                  <i className="icon_calendar"></i>
                </div>
                <div className="select-option ">
                  <label>Guests:</label>
                  <select id="guest">
                    <option value="">2 Adults</option>
                    <option value="">3 Adults</option>
                  </select>
                </div>
                <div className="select-option">
                  <label>Room:</label>
                  <select id="room">
                    <option value="">1 Room</option>
                    <option value="">2 Room</option>
                  </select>
                </div>
                <button type="submit">Check Availability</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Slider {...settings} className="hero-slider owl-carousel" >
      {images.map((image, index) => (
    <div key={index} className="hs-item">
      <img src={image.url} alt={image.alternativeText} className="slider-image" />
    </div>
  ))}
      </Slider>
      {/* <HeroSlider images={images} /> */}
      
    </section>
  );
};

export default Hero;
