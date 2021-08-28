import React, { useState } from 'react';
import { Menu, Grid, MenuItem, Icon, Ref, Sticky, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import useWindowSize from '../hooks/useWindowSize';
import MySideBar from './sidebar';
import { HEADER_DATA } from '../data/appbarItems';
import Image from 'next/image';

const StyledNavTitle = styled.p`
   font-size: 16px;
   /* border: 1px solid rebeccapurple; */
`;

const AppBar = (props) => {
   const [openSidebar, setOpenSidebar] = useState(false);
   const router = useRouter();
   const { width } = useWindowSize();
   console.log(width);
   const handleClick = (url) => {
      router.push(url);
   };
   const handleClickMenu = () => setOpenSidebar(!openSidebar);
   return (
      <div>
         <Grid divided='vertically' stackable>
            <Grid.Row columns={2} style={{ marginTop: 20 }} divided>
               <Grid.Column largeScreen={4} mobile={16} textAlign='center'>
                  <Image
                     onClick={() => router.push('/')}
                     alt='truva-zemin araştırmaları'
                     className='logo'
                     src='/media/truva_appbar.jpg'
                  />
                  <Grid verticalAlign='middle' columns={1}>
                     <Grid.Column only='mobile' floated='left'>
                        <Button fluid onClick={handleClickMenu} style={{ margin: '20px 0' }}>
                           <Button.Content>
                              <Icon name={openSidebar ? 'angle double left' : 'angle double right'} size='big' />
                           </Button.Content>
                        </Button>
                     </Grid.Column>
                  </Grid>
               </Grid.Column>
               <MySideBar visible={openSidebar} handleClickMenuItem={handleClick} onClose={handleClickMenu} />
               <Grid.Column className='appBar' only='computer' width={12}>
                  <Menu secondary pointing>
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
                                 <Grid.Column width={12}>
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
