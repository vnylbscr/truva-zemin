import React, { Fragment } from 'react';
import AppBar from '../components/appBar';
import { Header, Divider, Container, ListItem, List, Image } from 'semantic-ui-react';
import classes from '../styles/About.module.scss';
import SupportTooltip from '../components/supportTooltip';
import Footer from '../components/footer';
import MyHead from '../components/head';

const MOCK_DATA = [
   {
      image: '/media/media05.png',
      title: 'Biz kimiz?',
      content:
         '2016 yılında kurulan şirketimiz, yerleşime uygunluk etüdleri, zemin etüdleri, yeraltısuyu araştırmaları konularında faaliyet göstermektedir. Şirketimiz bugüne kadar birçok sanayi yapısı, toplu konut, konut, yüksek yapıların zemin araştırmalarını üstlenmiştir.',
   },
   {
      image: '/media/media02.jpeg',
      title: 'Vizyonumuz',
      content: 'Teknik ve bilimsel konuda çevresine ekonomik çözümler üreten kurumsal bir firma olmak.',
   },
];

const SERVICES_DATA = [
   'Ruhsata Esas Zemin ve Temel Etüt Çalışmaları',
   'İmar Planına Esas Jeolojik ve Jeoteknik Etüt Raporları',
   'Sondaj Hizmetleri',
   'Sismik Ölçümler (Kırılma, Yansıma, Masw-Mam)',
   'Rezistivite Ölçümler',
   'Mikrotremör Ölçümler',
   'Geo Teknik Uygulamalar',
   'Laboratuvar ve Arazi Deneyleri',
   'Aletsel Gözlem ve Değerlendirme',
   'Kalite Kontrol ve Test',
];
const About = () => {
   return (
      <Fragment>
         <MyHead title='Truva Zemin | Hakkında' />
         <main className={classes.main}>
            <AppBar />
            <SupportTooltip size='huge' />
            <div className={classes.aboutSection}>
               {MOCK_DATA.map((item) => (
                  <Container text key={item.image} className={classes.cardContainer}>
                     <Image src={item.image} alt='Truva Zemin About' className={classes.imgAbout} />
                     <Header as='h1'>{item.title}</Header>
                     <Divider />
                     <Header.Subheader style={{ paddingBottom: 20 }}>{item.content}</Header.Subheader>
                  </Container>
               ))}
               <Container text style={{ marginTop: 20, paddingBottom: 30, lineHeight: 24 }}>
                  <Header as='h1'>Hizmetlerimiz</Header>
                  <List bulleted>
                     {SERVICES_DATA.map((item, index) => (
                        <ListItem key={item + index} className={classes.listItem}>
                           {item}
                        </ListItem>
                     ))}
                  </List>
               </Container>
            </div>
         </main>
         <Footer />
      </Fragment>
   );
};

export default About;
