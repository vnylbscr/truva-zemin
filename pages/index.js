import Head from 'next/head';
import classes from '../styles/Home.module.scss';
import { Header, Segment } from 'semantic-ui-react';
import AppBar from '../components/appBar';
import { Fragment } from 'react';
import SupportTooltip from '../components/supportTooltip';
import Footer from '../components/footer';
import CarouselSlick from '../components/home/carouselSlick';

const Home = (props) => {
   return (
      <Fragment>
         <Head>
            <title>Truva Zemin Etüt Araştırmaları | Anasayfa </title>
            <meta name='description' content='Truva Zemin Etüt Araştırmaları Anasayfa' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <meta property='og:title' content='Truva Zemin Etüt Araştırmaları | Anasayfa' />
            <meta property='og:description' content='Truva Zemin etüt araştırmaları' />
            <meta property='og:url' content='https://truvazemin.com/' />
            <meta property='og:type' content='website' />
            <meta property='og:https://truvazemin.com/' content='https://truvazemin.com/' />
            <meta name='robots' content='index, follow' />
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <div className={classes.main}>
            <AppBar />
            <SupportTooltip size='huge' />
            <div className={classes.headerSection}>
               <h2>Truva Zemin & Etüt Araştırmaları</h2>
               <h4>Jeolojik Jeoteknik Etüt ve Daha Fazlası</h4>
            </div>
            <div style={{ padding: 20, marginBottom: 20 }}>
               <Segment attached='top' style={{ padding: 20 }}>
                  <Header as='h1'>
                     Jeoteknik Etüt & Zemin Araştırmaları ve Daha Fazlası
                     <Header.Subheader style={{ marginTop: 10 }}>
                        2016 yılında kurulan şirketimiz, yerleşime uygunluk etüdleri, zemin etüdleri, yeraltısuyu
                        araştırmaları konularında faaliyet göstermektedir.
                     </Header.Subheader>
                  </Header>
               </Segment>
               <Segment attached='bottom' padded>
                  <CarouselSlick />
               </Segment>
            </div>
         </div>
         <Footer />
      </Fragment>
   );
};

export default Home;
