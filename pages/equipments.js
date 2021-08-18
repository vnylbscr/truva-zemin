import React, { Fragment } from 'react';
import { Header, ListIcon, ListItem, List, Grid, Image, Divider, Icon } from 'semantic-ui-react';
import AppBar from '../components/appBar';
import MyHead from '../components/head';
import SupportTooltip from '../components/supportTooltip';
import classes from '../styles/Equipments.module.scss';
import Footer from '../components/footer';
const DATA = [
   {
      title: '2 ADET TAM HİDROLİK SONDAJ MAKİNASI (100 m DERİNLİK)',
      icon: 'map',
   },
   {
      title: '1 ADET SEİSTRONİX RAS 24 MARKA 24 KANALLI SİSMİK CİHAZ',
      icon: 'user',
   },
   {
      title: '1 ADET APEGEO PRESİYOMETRE CİHAZI',
      icon: 'user',
   },
   {
      title: '1 ADET YER ALTI SU SEVİYE ÖLÇER',
      icon: 'user',
   },
   {
      title: '1 ADET ZOND JEORADAR (GPR) YER RADARI',
      icon: 'user',
   },
];

const Equipments = () => {
   return (
      <Fragment>
         <MyHead title='Truva Zemin Etüt Araştırmaları | Ekipmanlarımız' />
         <div className={classes.main}>
            <AppBar />
            <SupportTooltip size='huge' />
            <Divider />
            <Grid centered verticalAlign='middle' stackable divided style={{ marginTop: 30 }}>
               <Grid.Row columns={1}>
                  <Grid.Column verticalAlign='middle'>
                     <Header textAlign='center' as='h1' color='orange' size='large'>
                        <Icon name='tasks' size='large' />
                        EKIPMANLARIMIZ
                     </Header>
                     <List bulleted size='massive'>
                        {DATA.map((item) => (
                           <List.Item as='a'>{item.title}</List.Item>
                        ))}
                     </List>
                  </Grid.Column>
                  <Grid centered>
                     <Grid.Row columns={3}>
                        <Grid.Column>
                           <Image src='/media/media07.jpeg' rounded size='large' className={classes.imgRounded} />
                        </Grid.Column>
                        <Grid.Column>
                           <Image src='/media/media05.png' rounded size='large' className={classes.imgRounded} />
                        </Grid.Column>
                        <Grid.Column>
                           <Image src='/media/media03.jpeg' rounded size='large' className={classes.imgRounded} />
                        </Grid.Column>
                     </Grid.Row>
                  </Grid>
               </Grid.Row>
            </Grid>
         </div>
         <Footer />
      </Fragment>
   );
};

export default Equipments;
