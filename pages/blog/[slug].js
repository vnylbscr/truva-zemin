import { useRouter } from 'next/dist/client/router';
import React from 'react';

const Index = () => {
   const router = useRouter();
   const { slug } = router.query;
   return <div>{slug}</div>;
};

export default Index;
