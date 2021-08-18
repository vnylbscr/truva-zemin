import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import AppBar from '../components/appBar';
import Footer from '../components/footer';
import GalleryCard from '../components/gallery/card';
import MyHead from '../components/head';
import SupportTooltip from '../components/supportTooltip';
import { GALLERY_DATA } from '../data/galleryData';
import classes from '../styles/Gallery.module.scss';

const Gallery = () => {
   return (
      <Fragment>
         <MyHead title='Truva Zemin Etüt Araştırmaları | Galeri' />
         <div className={classes.main}>
            <AppBar />
            <SupportTooltip size='huge' />
            <Grid columns={2} stackable divided className={classes.cardContainer}>
               <Grid.Row>
                  {GALLERY_DATA.map((item, index) => (
                     <Grid.Column>
                        <GalleryCard
                           key={item.headerTitle + index}
                           description={item.description}
                           headerTitle={item.headerTitle}
                           imageUrl={item.image}
                           cardMeta={item?.cardMeta}
                        />
                     </Grid.Column>
                  ))}
               </Grid.Row>
            </Grid>
         </div>
         <Footer />
      </Fragment>
   );
};

export default Gallery;
