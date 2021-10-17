export const config = {
   dataset: 'production',
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
   useCdn: process.env.NODE_ENV === 'production',
};
