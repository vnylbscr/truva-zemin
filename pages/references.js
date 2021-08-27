import React from 'react';
import classes from '../styles/References.module.scss';
import { Fragment } from 'react/cjs/react.development';
import MyHead from '../components/head';
import AppBar from '../components/appBar';
import SupportTooltip from '../components/supportTooltip';
import { Header } from 'semantic-ui-react';
import Footer from '../components/footer';
import ReferenceTable from '../components/referenceTable';
const References = () => {
   return (
      <Fragment>
         <MyHead title='Truva Zemin Araştırmaları | Referanslarımız' />
         <main className={classes.main}>
            <AppBar />
            <SupportTooltip size='huge' />
            <Header as='h1' textAlign='center' color='grey'>
               {'Referanslarımız'.toUpperCase()}
            </Header>
            <ReferenceTable />
         </main>
         <Footer />
      </Fragment>
   );
};

export default References;
