import React, { useRef } from 'react';
import { Menu, Grid, MenuItem, ListIcon, Ref, Sticky } from 'semantic-ui-react';
import classes from '../styles/Home.module.scss';
import styled from 'styled-components';

import { useRouter } from 'next/dist/client/router';
import useWindowSize from '../hooks/useWindowSize';
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
   const router = useRouter();
   const { width } = useWindowSize();
   const handleClick = (url) => {
      router.push(url);
   };
   return (
      <HeaderWrapper>
         <Grid divided='vertically'>
            <Grid.Row columns={2} style={{ marginTop: 20 }}>
               <Grid.Column width={width < 630 ? 16 : 4} verticalAlign='middle' textAlign='center'>
                  <img className='logo' src='/media/truva_appbar.jpg' />
               </Grid.Column>
               <Grid.Column width={12}>
                  <Menu
                     secondary
                     pointing
                     vertical={width < 625}
                     className={classes.header}
                     style={{ marginLeft: width < 625 && 'auto' }}
                  >
                     {HEADER_DATA.map((item) => (
                        <Menu.Item
                           active={item.url === router.pathname}
                           key={item.value}
                           onClick={() => handleClick(item.url)}
                        >
                           <Grid relaxed className={classes.menuItem}>
                              <Grid.Row columns={2} verticalAlign='middle'>
                                 <Grid.Column width={3}>
                                    <ListIcon name={item.icon} size='large' />
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
      </HeaderWrapper>
   );
};

export default AppBar;
