import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
   static async getInitialProps(ctx) {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;
      try {
         ctx.renderPage = () =>
            originalRenderPage({
               enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            });

         const initialProps = await Document.getInitialProps(ctx);
         return {
            ...initialProps,
            styles: (
               <>
                  {initialProps.styles}
                  {sheet.getStyleElement()}
               </>
            ),
         };
      } finally {
         sheet.seal();
      }
   }
   render() {
      return (
         <Html>
            <Head>
               <meta name='description' content='Truva Zemin Etüt Araştırmaları Anasayfa' />
               <meta property='og:title' content='Truva Zemin Etüt Araştırmaları | Anasayfa' />
               <meta property='og:description' content='Truva Zemin etüt araştırmaları' />
               <meta property='og:url' content='https://truvazemin.com/' />
               <meta property='og:type' content='website' />
               <meta name='robots' content='index, follow' />
               <link rel='icon' href='/favicon.ico' />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}
