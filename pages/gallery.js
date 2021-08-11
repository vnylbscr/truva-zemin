import React, { Fragment } from 'react';
import AppBar from '../components/appBar';
import MyHead from '../components/head';
import SupportTooltip from '../components/supportTooltip';

const Gallery = () => {
   return (
      <Fragment>
         <MyHead title='Truva Zemin Etüt Araştırmaları | Galeri' />
         <AppBar />
         <SupportTooltip size='huge' />
      </Fragment>
   );
};

export default Gallery;
