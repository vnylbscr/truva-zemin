import React from 'react';
import { CarouselProvider, Slider } from 'pure-react-carousel';
import CustomCardSlide from './cardSlide';
import CustomDotGroup from './customDot';
const CardHome = () => {
   return (
      <CarouselProvider naturalSlideWidth={1} naturalSlideHeight={1} totalSlides={3} style={{ width: '400px' }}>
         <Slider>
            <CustomCardSlide image='/media/media01.png' index={0} header='Matthew House' meta='Friend' />
            <CustomCardSlide header='Vizyon' image='/media/media02.jpeg' index={1} meta='Friend' />
            <CustomCardSlide header='Steve Sanders' image='/media/media03.jpeg' index={2} meta='Friend' />
         </Slider>
         <CustomDotGroup slides={3} />
      </CarouselProvider>
   );
};
export default CardHome;
