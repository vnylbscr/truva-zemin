import React from 'react';
import Head from 'next/head';
import { SITE_HEAD_TITLE } from '../lib/constants';

const MyHead = ({ title }) => {
   return (
      <Head>
         <title>{title}</title>
         <meta name='viewport' content='initial-scale=1.0, width=device-width' />
         <meta name='description' content={title ? title : SITE_HEAD_TITLE} />
         <meta property='og:title' content={title} />
         <meta property='og:description' content={title ? title : SITE_HEAD_TITLE} />
         <meta property='og:url' content='https://truvazemin.com/' />
         <meta property='og:type' content={title ? title : SITE_HEAD_TITLE} />
         <link rel='icon' href='/favicon.ico' />
         <meta name='og:twitter:title' content={title ? title : SITE_HEAD_TITLE} />
         <meta name='og:twitter:description' content={title ? title : SITE_HEAD_TITLE} />
      </Head>
   );
};

export default MyHead;
