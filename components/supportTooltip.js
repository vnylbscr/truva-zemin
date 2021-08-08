import React from 'react';
import { Grid, Popup, Icon, Header, Label } from 'semantic-ui-react';

const SupportTooltip = ({ size }) => {
   return (
      <Grid>
         <Grid.Column width={16} textAlign='right' style={{ marginRight: 20 }}>
            <Popup
               trigger={
                  <a href='tel:+905549900997'>
                     <Label as='a' color='blue' size={size} detail='Merto' image>
                        <img src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
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
