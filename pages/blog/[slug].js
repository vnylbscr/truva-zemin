import React, { Fragment } from 'react';
import groq from 'groq';
import { useRouter } from 'next/router';
import { getClient, urlFor } from '../../lib/sanity.server';
import SanityBlockContent from '@sanity/block-content-to-react';
import { serializers } from '../../components/blog/serializer';
import { Button, Grid, Header, Icon, Image, Label } from 'semantic-ui-react';
import SupportTooltip from '../../components/supportTooltip';
import AppBar from '../../components/appBar';
import MyHead from '../../components/head';
import Footer from '../../components/footer';
import classes from '../../styles/Blog.module.scss';
import moment from 'moment';
import 'moment/locale/tr';
import useResponsiveScreen from '../../hooks/useResponsiveScreen';

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    body,
    author->{
       image,
       name
    },
    subtitle,
    mainImage,
    categories[]->{
      _id,
      title
    },
    "slug": slug.current
  }
`;

const Index = (props) => {
   const router = useRouter();
   let { data, preview } = props;
   const { isSmallScreen } = useResponsiveScreen();

   return (
      <Fragment>
         <MyHead title={`Truva Zemin Araştırmaları | ${data.post.title}`} />
         <main className={classes.main}>
            <AppBar />
            <SupportTooltip size='huge' />
            <Grid centered padded className={classes.blockSingleItemContainer}>
               <Grid.Row columns={1}>
                  <Grid.Column computer={8} mobile={12}>
                     <Grid verticalAlign='bottom'>
                        <Grid.Row columns={2} style={{ paddingLeft: 16, padding: '32px 16px' }}>
                           <Image src={urlFor(data.post.author.image).url()} rounded size='tiny' alt='truva_zemin' />
                           <Header as='h2' style={{ paddingLeft: !isSmallScreen && 16 }}>
                              {data.post.author.name}
                              <Header.Subheader>
                                 {`${moment(data.post.createdAt)
                                    .locale('tr')
                                    .format('DD MMMM YYYY')} tarihinde paylaşıldı`}
                              </Header.Subheader>
                           </Header>
                        </Grid.Row>
                     </Grid>

                     {data?.post?.categories?.map((item) => (
                        <Label size='medium' color='grey' key={item._id}>
                           {' '}
                           <Icon name='hashtag' />
                           {item.title}{' '}
                        </Label>
                     ))}

                     <Header as='h1' style={{ fontSize: 32, wordBreak: 'break-word' }} color='orange'>
                        {data.post.title.toUpperCase()}
                     </Header>
                     <SanityBlockContent
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        dataset='production'
                        blocks={data.post.body}
                        serializers={serializers}
                        className={classes.blockContent}
                     />
                  </Grid.Column>
               </Grid.Row>
               <Button
                  size='huge'
                  className={classes.backButton}
                  color='blue'
                  onClick={() => router.back()}
                  icon
                  labelPosition='right'
               >
                  Geri Dön
                  <Icon name='left arrow' />
               </Button>
            </Grid>
         </main>

         <Footer />
      </Fragment>
   );
};

export const getStaticProps = async ({ params, preview = false }) => {
   const post = await getClient(preview).fetch(postQuery, {
      slug: params.slug,
   });

   return {
      props: {
         preview,
         data: { post },
      },
   };
};

export const getStaticPaths = async () => {
   const paths = await getClient().fetch(groq`*[_type == "post" && defined(slug.current)][].slug.current`);

   return {
      paths: paths.map((slug) => ({ params: { slug } })),
      fallback: false,
   };
};

export default Index;
