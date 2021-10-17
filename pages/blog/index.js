import React from 'react';
import { Fragment } from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';
import AppBar from '../../components/appBar';
import Footer from '../../components/footer';
import MyHead from '../../components/head';
import SupportTooltip from '../../components/supportTooltip';
import classes from '../../styles/Blog.module.scss';
import { getClient } from '../../lib/sanity.server';
import groq from 'groq';
import BlogComponent from '../../components/blog/blogComponent';

const postQuery = groq`*[_type == "post"] | order(publishedAt desc){
                title,
                "name":author->name,
                "authorImage":author->image,
                _createdAt,
                publishedAt,
                subtitle,
                body,
                slug,
                mainImage{
                asset->{
                _id,
                url
                }
            }
            }`;

const Blog = (props) => {
   const { data: allBlogs } = props;

   return (
      <Fragment>
         <MyHead title='Truva Zemin | Blog' />
         <main className={classes.main}>
            <AppBar />
            <SupportTooltip size='huge' />
            <Grid container centered stackable className={classes.blogContainerGrid}>
               <Header style={{ fontSize: '64px' }} color='orange' className={classes.blogPageTitle}>
                  Truva Zemin Blog
                  <Header as='h3' color='grey'>
                     en güncel içerikler için bizleri takip etmeyin unutmayın!
                  </Header>
               </Header>
            </Grid>
            <BlogComponent posts={allBlogs} />
         </main>
         <Footer />
      </Fragment>
   );
};

export const getStaticProps = async (context) => {
   const data = await getClient().fetch(postQuery);

   return {
      props: {
         data: data,
      },
   };
};

export default Blog;
