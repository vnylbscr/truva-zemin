import React from 'react';
import Head from 'next/head';

const MyHead = ({ title }) => {
   return (
      <Head>
         <title>{title}</title>
         <meta name='viewport' content='initial-scale=1.0, width=device-width' />
         <meta name='description' content={title ? title : 'Truva Zemin Etüt Araştırmaları'} />
         <meta property='og:title' content={title} />
         <meta property='og:description' content={title ? title : 'Truva Zemin Etüt Araştırmaları'} />
         <meta property='og:url' content='https://truvazemin.com/' />
         <meta property='og:type' content={title ? title : 'Truva Zemin Etüt Araştırmaları'} />
         <link rel='icon' href='/favicon.ico' />
         <meta name='og:twitter:title' content={title ? title : 'Truva Zemin Etüt Araştırmaları'} />
         <meta name='og:twitter:description' content={title ? title : 'Truva Zemin Etüt Araştırmaları'} />
      </Head>
   );
};

export default MyHead;
