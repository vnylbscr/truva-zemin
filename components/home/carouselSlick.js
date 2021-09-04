import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Grid, Image, Icon, Button } from 'semantic-ui-react';
import { GET_ALL_MEDIA } from '../../lib/images';
import classes from '../../styles/Home.module.scss';
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
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
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
                     <Image size='massive' src={image} rounded alt='truva-zemin' />
                  </Grid.Column>
               </Grid>
            );
         })}
      </Slider>
   );
};

const ArrowRightComponent = (props) => {
   const { className, style, onClick } = props;
   return (
      <Button
         color='vk'
         className={className}
         style={{
            ...style,
            width: 40,
            height: 40,
            zIndex: '999',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            right: -20,
         }}
         icon
         onClick={onClick}
      >
         {' '}
      </Button>
   );
};

const ArrowLeftComponent = (props) => {
   const { className, style, onClick } = props;
   return (
      <Button
         onClick={onClick}
         style={{
            ...style,
            width: 40,
            height: 40,
            zIndex: '999',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            left: -20,
         }}
         className={className}
         color='vk'
      ></Button>
   );
};

export default CarouselSlick;
