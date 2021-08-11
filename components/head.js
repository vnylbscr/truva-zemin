import React from 'react';
import Head from 'next/head';

const MyHead = ({ title }) => {
   return (
      <Head>
         <title>{title} </title>
         <meta name='viewport' content='initial-scale=1.0, width=device-width' />
         <meta property='og:title' content={title} />
         <meta property='og:description' content='Truva Zemin etüt araştırmaları' />
         <meta property='og:url' content='https://truvazemin.com/' />
         <meta property='og:type' content='website' />
         <link rel='icon' href='/favicon.ico' />
      </Head>
   );
};

export default MyHead;
