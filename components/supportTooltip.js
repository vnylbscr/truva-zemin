import React from 'react';
import { Grid, Popup, Icon, Header, Label, Image } from 'semantic-ui-react';

const SupportTooltip = ({ size }) => {
   return (
      <Grid stackable centered padded>
         <Grid.Column width={16} textAlign='right' style={{ marginRight: 20 }}>
            <Popup
               trigger={
                  <a href='tel:+905549900997'>
                     <Label color='orange' size={size} detail='Jeofizik Mühendisi' image>
                        <Image size='huge' src='/media/profilePicture.jpeg' avatar />
                        Muhammet GENÇ
                        <Label.Detail>Jeofizik Mühendisi</Label.Detail>
                     </Label>
                  </a>
               }
            >
               <Grid verticalAlign='middle'>
                  <Grid.Column width={3}>
                     <Icon name='phone' color='orange' />
                  </Grid.Column>
                  <Grid.Column width={13}>
                     <Header color='orange' as='h4'>
                        0554 990 09 97
                     </Header>
                  </Grid.Column>
               </Grid>
            </Popup>
         </Grid.Column>
      </Grid>
   );
};

export default SupportTooltip;
