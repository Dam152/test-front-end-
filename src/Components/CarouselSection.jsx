import React, { useRef } from 'react';
import './css/carousel.css';
import arrowLeft from '/src/assets/img/arrowLeft.svg';
import arrowRight from '/src/assets/img/arrowRight.svg';
import CarouselItem from './CarouselItem';
import { cardsCarousel } from '../data';

export default function CarouselSection() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 280;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 280; 
    }
  };

  return (
    <section className='carousel'>
      <div className="text-container-carousel">
        <div className="text-carousel-row">
          <h3 className="title-carousel">Le novità in bottega</h3>
          <p className="text-carousel">Nella cucina professionale/laboratorio multifunzionale (interamente alimentata a corrente) che è stata allestita</p>
        </div>
        <div className="arrows">
          <img src={arrowLeft} alt="arrow-left" className='arrow' onClick={scrollLeft} />
          <img src={arrowRight} alt="arrow-right" className='arrow' onClick={scrollRight} />
        </div>
      </div>
      <div className="carousel-container" ref={carouselRef}>
        {cardsCarousel.map((card) => (
          <CarouselItem key={card.id} img={card.img} title={card.title}></CarouselItem>
        ))}
      </div>
    </section>
  );
}
