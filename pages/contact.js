import React, { Fragment } from 'react';
import { Grid, Segment, Header, Icon, Label, Image, Divider } from 'semantic-ui-react';
import AppBar from '../components/appBar';
import Footer from '../components/footer';
import GoogleMaps from '../components/googleMap';
import MyHead from '../components/head';
import useWindowSize from '../hooks/useWindowSize';
import classes from '../styles/Contact.module.scss';

const Contact = () => {
   const { width } = useWindowSize();
   const isSmallScreen = width < 625;
   return (
      <Fragment>
         <MyHead title='Truva Zemin Zemin Araştırmaları | Bize Ulaşın' />
         <div className={classes.main}>
            <AppBar />
            {/* <SupportTooltip size='huge' /> */}
            <div className={classes.root}>
               <div className={classes.titleContainer}>
                  <p>Bize Ulaşın</p>
                  <span>Aşağıdaki bağlantı kanallarından bize ulaşabilirsiniz.</span>
                  <Icon name='write' size='large' />
               </div>
               <div className={classes.bottomContainer}>
                  <Grid divided='vertically' inverted stackable verticalAlign='middle'>
                     <Grid.Row columns={2} stretched>
                        <Grid.Column width={8} className={classes.leftSection}>
                           <Header as='h1' dividing>
                              Adresimiz
                              <Header.Subheader>
                                 Merve Mah. Bahçelievler cad. No:63 / 8 Sancaktepe / İSTANBUL
                              </Header.Subheader>
                           </Header>
                           <GoogleMaps />
                        </Grid.Column>
                        <Grid.Column width={8}>
                           <Header as='h1' dividing>
                              Cep ve Mail Adresleri
                              <Header.Subheader>İşte bize ulaşabileceğiz iletişim kanalları.</Header.Subheader>
                           </Header>
                           <Grid inverted centered style={{ height: 528 }}>
                              <Grid.Row columns={2}>
                                 <Grid.Column width={16} verticalAlign='middle' className={classes.mailSection}>
                                    <Header as='h1' dividing icon color='orange'>
                                       <Icon name='mail' circular size='large' />
                                       <span>E-mail</span>
                                       <a href='mailto:truvazemin@gmail.com'>
                                          <Header.Subheader className={classes.iconSection}>
                                             truvazemin@gmail.com
                                          </Header.Subheader>
                                       </a>
                                    </Header>
                                 </Grid.Column>
                                 <Grid.Column width={16} verticalAlign='middle' className={classes.mailSection}>
                                    <Header as='h1' dividing icon color='orange'>
                                       <Icon name='phone square' circular size='large' />
                                       Telefon
                                       <Header.Subheader
                                          className={classes.iconSection}
                                          href='tel:0554 990 09 97'
                                          as='a'
                                       >
                                          Muhammet Genç
                                       </Header.Subheader>
                                    </Header>
                                 </Grid.Column>
                              </Grid.Row>
                           </Grid>
                        </Grid.Column>
                     </Grid.Row>
                  </Grid>
               </div>
            </div>
         </div>
         <Footer />
      </Fragment>
   );
};

export default Contact;
