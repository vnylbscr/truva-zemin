import React from 'react';
import { Fragment } from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';
import AppBar from '../../components/appBar';
import Footer from '../../components/footer';
import MyHead from '../../components/head';
import SupportTooltip from '../../components/supportTooltip';
import classes from '../../styles/Blog.module.scss';

const Blog = () => {
   return (
      <Fragment>
         <MyHead title='Truva Zemin | Blog' />
         <main className={classes.main}>
            <AppBar />
            <SupportTooltip size='huge' />
            <Grid style={{ height: '60%' }}>
               <Grid.Column verticalAlign='middle'>
                  <Segment textAlign='center' size='massive' inverted color='orange'>
                     <Header textAlign='center'>En güncel içerikler için blog sayfamızı takip edin.</Header>
                  </Segment>
               </Grid.Column>
            </Grid>
         </main>
         <Footer />
      </Fragment>
   );
};

export default Blog;
