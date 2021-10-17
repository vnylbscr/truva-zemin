import React, { useState } from 'react';
import { Button, Grid, Header, Icon, Image, Segment } from 'semantic-ui-react';
import BlogItem from './blogItem';

const tempData = [
   {
      _id: 1,
      image: 'https://api.ferrarinetwork.ferrari.com/v2/network-content/medias//resize/6093c272bd556b14451c63fd-ferrari-magazine-3VZBdCqj7k.jpg?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF',
      title: 'Truva zemin sasdas',
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."`,
   },

   {
      _id: 2,
      image: 'https://api.ferrarinetwork.ferrari.com/v2/network-content/medias//resize/6093c272bd556b14451c63fd-ferrari-magazine-3VZBdCqj7k.jpg?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF',
      title: 'Truva zemin sasdas',
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."`,
   },

   {
      _id: 3,
      image: 'https://api.ferrarinetwork.ferrari.com/v2/network-content/medias//resize/6093c272bd556b14451c63fd-ferrari-magazine-3VZBdCqj7k.jpg?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF',
      title: 'Truva zemin sasdas',
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."`,
   },

   {
      _id: 4,
      image: 'https://api.ferrarinetwork.ferrari.com/v2/network-content/medias//resize/6093c272bd556b14451c63fd-ferrari-magazine-3VZBdCqj7k.jpg?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF',
      title: 'Truva zemin sasdas',
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."`,
   },

   {
      _id: 5,
      image: 'https://api.ferrarinetwork.ferrari.com/v2/network-content/medias//resize/6093c272bd556b14451c63fd-ferrari-magazine-3VZBdCqj7k.jpg?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF',
      title: 'Truva zemin sasdas',
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."`,
   },

   {
      _id: 6,
      image: 'https://api.ferrarinetwork.ferrari.com/v2/network-content/medias//resize/6093c272bd556b14451c63fd-ferrari-magazine-3VZBdCqj7k.jpg?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF',
      title: 'Truva zemin sasdas',
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."`,
   },

   {
      _id: 7,
      image: 'https://api.ferrarinetwork.ferrari.com/v2/network-content/medias//resize/6093c272bd556b14451c63fd-ferrari-magazine-3VZBdCqj7k.jpg?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF',
      title: 'Truva zemin sasdas',
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."`,
   },
];

const BlogComponent = ({ posts }) => {
   if (posts.length === 0) {
      return (
         <Grid style={{ height: '60%' }}>
            <Grid.Column verticalAlign='middle'>
               <Segment textAlign='center' size='massive' inverted color='orange'>
                  <Header textAlign='center'>En güncel içerikler için blog sayfamızı takip edin.</Header>
               </Segment>
            </Grid.Column>
         </Grid>
      );
   }

   return (
      <Grid container verticalAlign='middle' stretched centered>
         {posts?.map((post) => (
            <BlogItem key={post._id} post={post} />
         ))}
      </Grid>
   );
};

export default BlogComponent;
