import { createClient, createImageUrlBuilder } from 'next-sanity';
import { config } from './sanity.config';

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const previewClient = createClient({
   ...config,
   useCdn: false,
});

export const getClient = (usePreview) => (usePreview ? previewClient : sanityClient);
