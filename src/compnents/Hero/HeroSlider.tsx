import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

interface Image {
  url: string;
  alternativeText: string;
}

interface HeroSliderProps {
  images: Image[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ images }) => {
  return (
    <OwlCarousel className="hero-slider owl-carousel" loop margin={0} nav items={1}>
      {images.map((image, index) => (
        <div
          key={index}
          className="hs-item"
          style={{ backgroundImage: `url(${image.url})` }}
          aria-label={image.alternativeText}
        ></div>
      ))}
    </OwlCarousel>
  );
};

export default HeroSlider;
