import Head from 'next/head';
import Image from 'next/image';
import classes from '../styles/Home.module.scss';
import { Container, Grid, Header, Segment, Transition } from 'semantic-ui-react';
import AppBar from '../components/appBar';
import styled from 'styled-components';
import { Fragment } from 'react';
import CarouselHome from '../components/home/carousel';
import CardHome from '../components/home/card';
import SupportTooltip from '../components/supportTooltip';
import Footer from '../components/footer';
export default function Home(props) {
   return (
      <Fragment>
         <Head>
            <title>Truva Zemin | Anasayfa </title>
         </Head>
         <Container fluid className={classes.main}>
            <AppBar />
            <SupportTooltip size='huge' />
            <div className={classes.headerSection}>
               <h2>Truva Zemin & Etüt Araştırmaları</h2>
               <h4>Jeolojik Jeoteknik Etüt</h4>
            </div>
            <div style={{ padding: 20 }}>
               <Segment attached='top' style={{ padding: 20 }}>
                  <Transition.Group animation='fade' duration={500}>
                     <Header as='h1'>
                        Jeoteknik Etüt & Zemin Araştırmaları ve Daha Fazlası
                        <Header.Subheader style={{ marginTop: 10 }}>
                           2016 yılında kurulan şirketimiz, yerleşime uygunluk etüdleri, zemin etüdleri, yeraltısuyu
                           araştırmaları konularında faaliyet göstermektedir.
                        </Header.Subheader>
                     </Header>
                  </Transition.Group>
               </Segment>
               <Segment attached='bottom'>
                  <CarouselHome />
               </Segment>
            </div>
         </Container>
         <Footer />
      </Fragment>
   );
}
