import React, { useState } from 'react';
import { Menu, Grid, MenuItem, Icon, Ref, Sticky, Button } from 'semantic-ui-react';
import classes from '../styles/Home.module.scss';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import useWindowSize from '../hooks/useWindowSize';
import MySideBar from './sidebar';
import { HEADER_DATA } from '../data/appbarItems';

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
      <div style={{ height: 150 }}>
         <Grid divided='vertically'>
            <Grid.Row columns={2} style={{ marginTop: 20 }} divided>
               <Grid.Column width={width < 625 ? 16 : 4} textAlign='center'>
                  <img onClick={() => router.push('/')} className='logo' src='/media/truva_appbar.jpg' />
                  {width < 625 && (
                     <Button secondary onClick={handleClickMenu}>
                        <Button.Content>
                           <Icon name={openSidebar ? 'angle double left' : 'angle double right'} size='big' />
                        </Button.Content>
                     </Button>
                  )}
               </Grid.Column>
               <MySideBar visible={openSidebar} handleClickMenuItem={handleClick} onClose={handleClickMenu} />
               <Grid.Column className='appBar' width={12}>
                  <Menu pointing secondary>
                     {HEADER_DATA.map((item) => (
                        <Menu.Item
                           active={item.url === router.pathname}
                           key={item.value}
                           onClick={() => handleClick(item.url)}
                        >
                           <Grid className='menuItem'>
                              <Grid.Row columns={2} verticalAlign='middle'>
                                 <Grid.Column width={3}>
                                    <Icon name={item.icon} size='large' />
                                 </Grid.Column>
                                 <Grid.Column width={5}>
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
