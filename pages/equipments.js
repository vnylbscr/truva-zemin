import React, { Fragment } from 'react';
import { Header, ListIcon, ListItem, List } from 'semantic-ui-react';
import AppBar from '../components/appBar';
import EquipmetsListItem from '../components/equipments/listItem';
import MyHead from '../components/head';
import SupportTooltip from '../components/supportTooltip';
import classes from '../styles/Equipments.module.scss';

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
            <Header textAlign='center' as='h1'>
               Ekipmanlarımız
               <ListIcon name='tasks' size='large' />
               <List ordered>
                  {DATA.map((item) => (
                     <EquipmetsListItem item={item} />
                  ))}
               </List>
            </Header>
         </div>
      </Fragment>
   );
};

export default Equipments;
