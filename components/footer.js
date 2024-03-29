import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { Container, Divider, Grid, Header, Icon, Image, List, ListItem, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledSpan = styled.a`
   color: #fff;
   transition: all 0.7s;
   margin-left: 5px;
   :hover {
      color: limegreen;
      cursor: pointer;
      text-decoration: underline;
   }
`;

const StyledIcon = styled(Icon)`
   color: aliceblue;
   transition: all 1s;
   :hover {
      color: grey;
      cursor: pointer;
      transform: translateY(-2px);
   }
`;

const FOOTER_SOCIAL_MEDIAS = [
   { url: 'https://linkedin.com/in/muhammet-gen%C3%A7-8003a092/?originalSubdomain=tr', name: 'linkedin' },
   { url: 'https://instagram.com/mhmmtgncc/?hl=tr', name: 'instagram' },
   { url: 'https://wa.me/+905549900997', name: 'whatsapp' },
];

const Footer = () => {
   const router = useRouter();

   return (
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
         <Container textAlign='center'>
            <Grid divided inverted stackable>
               <Grid.Column width={16}>
                  <Header inverted as='h3' content='Truva Zemin & Etüt Araştırmaları LTD ŞTİ' />
                  <p>
                     Copyright © {new Date().getFullYear()}
                     <StyledSpan
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.linkedin.com/in/mert-gen%C3%A7-17b93212a/'
                     >
                        Mert Genç {'\n'}{' '}
                     </StyledSpan>
                  </p>
                  <p>All Rights Reserved.</p>
               </Grid.Column>
            </Grid>

            <Divider inverted section />
            <Image centered size='medium' src='/media/truva_appbar.jpg' alt='truva_logo' />
            <List horizontal inverted divided link size='small'>
               <List.Item as='a'>Site Haritası</List.Item>
               <List.Item as='a' onClick={() => router.push('/contact')}>
                  Bize Ulaşın
               </List.Item>
               <List.Item as='a'>Gizlilik Politikası</List.Item>
            </List>
            <Divider />
            <List horizontal>
               {FOOTER_SOCIAL_MEDIAS.map((item, index) => {
                  return (
                     <ListItem key={item.url + index}>
                        <a href={item.url} target='_blank' rel='noopener noreferrer'>
                           <StyledIcon name={item.name} size='big' />
                        </a>
                     </ListItem>
                  );
               })}
            </List>
         </Container>
      </Segment>
   );
};

export default Footer;
