//eslint-disable
import { Image } from 'semantic-ui-react';
import { urlFor } from '../../lib/sanity.server';

export const serializers = {
   types: {
      image: (props) => {
         return (
            <Image
               src={urlFor(props.node)}
               style={{ padding: '48px 0px' }}
               rounded
               size='huge'
               centered
               alt='truva_zemin_araştırmaları'
            />
         );
      },
   },
};
