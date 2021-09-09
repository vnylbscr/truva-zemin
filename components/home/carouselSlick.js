import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Image, Grid, Icon, Button } from 'semantic-ui-react';
import { GET_ALL_MEDIA } from '../../lib/images';
import classes from '../../styles/Home.module.scss';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons';
import useBoolean from '../../hooks/useBoolean';
const CarouselSlick = () => {
   const images = GET_ALL_MEDIA();
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: true,
      swipeToSlide: true,
      nextArrow: <ArrowRightComponent />,
      prevArrow: <ArrowLeftComponent />,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 2,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };
   return (
      <Slider {...settings} centerPadding>
         {images.map((image) => {
            return (
               <Grid key={image}>
                  <Grid.Column mobile='16'>
                     <Image size='huge' src={image} rounded alt='truva-zemin' />
                  </Grid.Column>
               </Grid>
            );
         })}
      </Slider>
   );
};

const ArrowRightComponent = (props) => {
   const { className, style, onClick } = props;
   const { value, on, off } = useBoolean(false);
   return (
      <Button
         color='vk'
         className={className}
         onMouseEnter={on}
         onMouseLeave={off}
         style={{
            ...style,
            width: 40,
            height: 40,
            zIndex: '999',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            right: -20,
            opacity: value ? 1 : 0.3,
         }}
         icon
         onClick={onClick}
      >
         <ArrowRightIcon />
      </Button>
   );
};

const ArrowLeftComponent = (props) => {
   const { className, style, onClick } = props;
   const { value, on, off } = useBoolean(false);

   return (
      <Button
         onClick={onClick}
         onMouseEnter={on}
         onMouseLeave={off}
         style={{
            ...style,
            width: 40,
            height: 40,
            zIndex: '999',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            left: -20,
            opacity: value ? 1 : 0.4,
         }}
         className={className}
         color='vk'
      >
         <ArrowLeftIcon />
      </Button>
   );
};

export default CarouselSlick;
