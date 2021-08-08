import React, { Fragment, useEffect, useState } from 'react';
import AppBar from '../components/appBar';
import { Header, Segment, Divider, Container, ListItem, List, Transition, Button } from 'semantic-ui-react';
import classes from '../styles/About.module.scss';
import Head from 'next/dist/next-server/lib/head';
import SupportTooltip from '../components/supportTooltip';
import Footer from '../components/footer';

const MOCK_DATA = [
   {
      image: '/media/media05.png',
      title: 'Biz kimiz?',
      content:
         '2016 yılında kurulan şirketimiz, yerleşime uygunluk etüdleri, zemin etüdleri, yeraltısuyu araştırmaları konularında faaliyet göstermektedir. Şirketimiz bugüne kadar birçok sanayi yapısı, toplu konut, konut, yüksek yapıların zemin araştırmalarını üstlenmiştir.',
   },
   {
      image: '/media/bg.jpeg',
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
   const [state, setState] = useState(false);

   return (
      <Fragment>
         <Head>
            <title>Truva Zemin | Hakkında</title>
         </Head>
         <main className={classes.main}>
            <AppBar />
            <SupportTooltip size='huge' />
            <div className={classes.aboutSection}>
               {MOCK_DATA.map((item) => (
                  <Container text key={item.image} className={classes.cardContainer}>
                     <img src={item.image} className={classes.imgAbout} />
                     <Header as='h1'>{item.title}</Header>
                     <Divider />
                     <Header.Subheader style={{ paddingBottom: 20 }}>{item.content}</Header.Subheader>
                  </Container>
               ))}
               <Container text style={{ marginTop: 20, paddingBottom: 30, lineHeight: 24 }}>
                  <Header as='h1'>Hizmetlerimiz</Header>
                  <List bulleted>
                     {SERVICES_DATA.map((item) => (
                        <ListItem className={classes.listItem}>{item}</ListItem>
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
