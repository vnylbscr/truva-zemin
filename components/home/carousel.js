import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledImage = styled.img`
   width: 100%;
   height: auto;
   background-size: cover;
   max-width: 1000px;
`;

const ImageWrapper = styled.div`
   padding: 10px 20px;
   background-color: #f1e9e5;
`;
const CarouselHome = () => {
   return (
      <Carousel autoPlay infiniteLoop selectedItem={2}>
         <ImageWrapper>
            <StyledImage src='/media/media01.png' />
            <p className='legend'>Jeolojik Sismik</p>
         </ImageWrapper>
         <ImageWrapper>
            <StyledImage src='/media/media02.jpeg' />
         </ImageWrapper>
         <ImageWrapper>
            <StyledImage src='/media/media03.jpeg' />
         </ImageWrapper>
         <ImageWrapper>
            <StyledImage src='/media/media04.jpeg' />
         </ImageWrapper>
      </Carousel>
   );
};

export default CarouselHome;
