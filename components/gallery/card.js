import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import classes from '../../styles/Gallery.module.scss';
const GalleryCard = ({ imageUrl, headerTitle, cardMeta, description }) => {
   return (
      <Card color='green' fluid className={classes.cardContainer}>
         <Image className={classes.imgMain} src={imageUrl} alt='truva_zemin' wrapped ui={false} />
         <Card.Content header={headerTitle}>
            <Card.Description>{description}</Card.Description>
         </Card.Content>

         <Card.Content extra>
            <Icon name='calendar outline' />
            {cardMeta}
         </Card.Content>
      </Card>
   );
};

export default GalleryCard;
