import PropTypes from 'prop-types';
import { Slide } from 'pure-react-carousel';
import React from 'react';
import { Card } from 'semantic-ui-react';
import classes from '../../styles/Home.module.scss';
const CustomCardSlide = ({ index, onClick, ...cardProps }) => (
   <Slide index={index}>
      <div style={{ padding: 10 }}>
         <Card onClick={onClick} {...cardProps} className={classes.cardImage} />
      </div>
   </Slide>
);

CustomCardSlide.propTypes = {
   index: PropTypes.number.isRequired,
};

export default CustomCardSlide;
