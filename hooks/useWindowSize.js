import { useState, useEffect } from 'react';
import { isServer } from '../lib/isServer';

const useWindowSize = () => {
   const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
   });

   useEffect(() => {
      if (!isServer) {
         const handleResize = () => {
            setWindowSize({
               width: window.innerWidth,
               height: window.innerHeight,
            });
         };
         window.addEventListener('resize', handleResize);
         handleResize();
         return () => window.removeEventListener('resize', handleResize);
      }
   }, []);
   return windowSize;
};

export default useWindowSize;
