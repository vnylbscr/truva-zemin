import React, { Fragment } from 'react';
import classes from '../styles/References.module.scss';
import MyHead from '../components/head';
import AppBar from '../components/appBar';
import SupportTooltip from '../components/supportTooltip';
import { Button, Grid, Header, Icon } from 'semantic-ui-react';
import Footer from '../components/footer';
import ReferenceTable from '../components/referenceTable';
const References = () => {
   const [inverted, setInverted] = React.useState(false);
   const toggleInverted = React.useCallback(() => {
      setInverted((prev) => !prev);
   }, []);
   return (
      <Fragment>
         <MyHead title='Truva Zemin Araştırmaları | Referanslarımız' />
         <main className={classes.main}>
            <AppBar />
            <SupportTooltip size='huge' />
            <Grid>
               <Grid.Row columns='2'>
                  <Grid.Column>
                     <Header as='h1' textAlign='center' color='grey'>
                        REFERANSLARIMIZ
                     </Header>
                  </Grid.Column>
                  <Grid.Column>
                     <Button
                        color='orange'
                        floated='right'
                        className={classes.themeButton}
                        icon
                        onClick={toggleInverted}
                     >
                        <Icon name={inverted ? 'sun' : 'moon'} className={classes.themeIcon} size='big' />
                     </Button>
                  </Grid.Column>
               </Grid.Row>
            </Grid>
            <ReferenceTable inverted={inverted} />
         </main>
         <Footer />
      </Fragment>
   );
};

export default References;
