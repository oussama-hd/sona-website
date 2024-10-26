import React, { useState, ReactNode } from 'react';
import './Carousel.css'; // Create this file for styles or use inline styles.

interface CarouselProps {
  children: ReactNode[];
  interval?: number; // in milliseconds, default to 3000
}

const Carousel: React.FC<CarouselProps> = ({ children, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  // Auto slide effect
  React.useEffect(() => {
    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [currentIndex, interval]);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div className="carousel-item" key={index}>
            {child}
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
