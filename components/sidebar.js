import React, { Fragment } from 'react';
import { Checkbox, Grid, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
const HEADER_DATA = [
   {
      label: 'Anasayfa',
      url: '/',
      value: 'home',
      icon: 'home',
   },
   {
      label: 'Hakkımızda',
      url: '/about',
      value: 'about',
      icon: 'info',
   },
   {
      label: 'Hizmetlerimiz',
      url: '/services',
      value: 'services',
      icon: 'sign language',
   },
   {
      label: 'Ekipmanlarımız',
      url: '/equipments',
      value: 'equipments',
      icon: 'american sign language interpreting',
   },
   {
      label: 'Galeri',
      url: '/gallery',
      value: 'gallery',
      icon: 'envira gallery',
   },
   {
      label: 'Referanslarımız',
      url: '/references',
      value: 'references',
      icon: 'tty',
   },
   {
      label: 'İletişim',
      url: '/contact',
      value: 'contact',
      icon: 'fax',
   },
];
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
                     <Menu.Item onClick={() => handleClickMenuItem(item.url)} as='a'>
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
