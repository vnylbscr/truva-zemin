import React, { useState } from 'react';
import { Menu, Grid, MenuItem, Icon, Ref, Sticky, Button } from 'semantic-ui-react';
import classes from '../styles/Home.module.scss';
import styled from 'styled-components';

import { useRouter } from 'next/dist/client/router';
import useWindowSize from '../hooks/useWindowSize';
import MySideBar from './sidebar';
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
const HeaderWrapper = styled.div`
   /* height: 100px; */
`;

const StyledNavTitle = styled.p`
   font-size: 16px;
   /* border: 1px solid rebeccapurple; */
`;

const AppBar = (props) => {
   const [openSidebar, setOpenSidebar] = useState(false);
   const router = useRouter();
   const { width } = useWindowSize();
   const handleClick = (url) => {
      router.push(url);
   };
   const handleClickMenu = () => setOpenSidebar(!openSidebar);
   return (
      <div>
         <Grid divided='vertically'>
            <Grid.Row columns={2} style={{ marginTop: 20 }} divided>
               <Grid.Column width={width < 625 ? 16 : 4} textAlign='center'>
                  <img className='logo' src='/media/truva_appbar.jpg' />
                  {width < 625 && (
                     <Button secondary onClick={handleClickMenu}>
                        <Button.Content>
                           <Icon name={openSidebar ? 'angle double left' : 'angle double right'} size='big' />
                        </Button.Content>
                     </Button>
                  )}
               </Grid.Column>
               <MySideBar visible={openSidebar} handleClickMenuItem={handleClick} onClose={handleClickMenu} />
               <Grid.Column width={12} className='appBar'>
                  <Menu pointing secondary>
                     {HEADER_DATA.map((item) => (
                        <Menu.Item
                           active={item.url === router.pathname}
                           key={item.value}
                           onClick={() => handleClick(item.url)}
                        >
                           <Grid relaxed className='menuItem'>
                              <Grid.Row columns={2} verticalAlign='middle'>
                                 <Grid.Column width={3}>
                                    <Icon name={item.icon} size='large' />
                                 </Grid.Column>
                                 <Grid.Column width={'9'}>
                                    <StyledNavTitle>{item.label}</StyledNavTitle>
                                 </Grid.Column>
                              </Grid.Row>
                           </Grid>
                        </Menu.Item>
                     ))}
                  </Menu>
               </Grid.Column>
            </Grid.Row>
         </Grid>
      </div>
   );
};

export default AppBar;
