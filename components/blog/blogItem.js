import React, { Fragment } from 'react';
import moment from 'moment';
import { useRouter } from 'next/dist/client/router';
import { Button, Card, Grid, Header, Icon, Image, Label } from 'semantic-ui-react';
import { urlFor } from '../../lib/sanity.server';
import classes from '../../styles/Blog.module.scss';
import 'moment/locale/tr';

const BlogItem = ({ post }) => {
   const route = useRouter();

   return (
      <Grid centered className={classes.blogItem} padded stackable container verticalAlign='center'>
         <Grid.Row columns={1}>
            <Grid.Column width={12}>
               <Card onClick={() => route.push(`/blog/${post?.slug?.current}`)} style={{ width: '100%' }}>
                  <Image src={urlFor(post?.mainImage).url()} alt='truva' wrapped ui={false} />
                  <Card.Content>
                     <Card.Header>
                        <Header as='h1' color='orange'>
                           {post?.title?.toUpperCase()}
                        </Header>
                     </Card.Header>
                     <Card.Description>{post?.subtitle}</Card.Description>
                     <Button
                        onClick={() => route.push(`/blog/${post?.slug?.current}`)}
                        floated='right'
                        animated='fade'
                        color='orange'
                        className={classes.seeMoreButton}
                     >
                        <Button.Content visible>Devamını Oku</Button.Content>{' '}
                        <Button.Content hidden>
                           <Icon name='arrow right' />{' '}
                        </Button.Content>{' '}
                     </Button>
                  </Card.Content>
                  <Card.Content extra>
                     <a>
                        <Icon name='calendar alternate outline' />
                        {moment(post?.createdAt).format('DD MMMM YYYY')}
                     </a>
                  </Card.Content>
                  <Card.Content extra>
                     <div
                        style={{
                           display: 'flex',
                           flexDirection: 'row',
                           alignItems: 'center',
                           gap: 8,
                        }}
                     >
                        <Image src={urlFor(post?.authorImage).url()} rounded size='mini' alt='truva_zemin' />
                        <p style={{ fontSize: 16 }}>{post?.name}</p>
                     </div>
                  </Card.Content>
               </Card>
            </Grid.Column>
         </Grid.Row>
      </Grid>
   );
};

export default BlogItem;
