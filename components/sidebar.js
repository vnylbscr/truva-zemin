import React, { Fragment } from 'react';
import { Checkbox, Grid, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { HEADER_DATA } from '../data/appbarItems';

const MySideBar = ({ backgroundColor, visible, onClose, handleClickMenuItem }) => {
   return (
      <Fragment>
         <Grid columns={visible && 1}>
            <Grid.Column>
               <Sidebar
                  as={Menu}
                  animation='overlay'
                  icon='labeled'
                  inverted
                  onHide={onClose}
                  vertical
                  visible={visible}
                  width='thin'
               >
                  {HEADER_DATA.map((item) => (
                     <Menu.Item key={item.value} onClick={() => handleClickMenuItem(item.url)} as='a'>
                        <Icon name={item.icon} />
                        {item.label}
                     </Menu.Item>
                  ))}
               </Sidebar>
            </Grid.Column>
         </Grid>
      </Fragment>
   );
};

export default MySideBar;
