import React from 'react';
import { MEDIUM_SCREEN_SIZE, SMALL_SCREEN_SIZE } from '../lib/constants';
import useWindowSize from './useWindowSize';

const useResponsiveScreen = () => {
   const { width } = useWindowSize();
   const [isSmallScreen, setSmallScreen] = React.useState(false);
   const [isMediumScreen, setMediumScreen] = React.useState(false);

   React.useEffect(() => {
      if (width < SMALL_SCREEN_SIZE) {
         setSmallScreen(true);
         setMediumScreen(false);
      } else if (SMALL_SCREEN_SIZE < width < MEDIUM_SCREEN_SIZE) {
         setMediumScreen(true);
         setSmallScreen(false);
      } else {
         setSmallScreen(false);
         setMediumScreen(false);
      }
   }, [width]);

   return {
      isSmallScreen,
      isMediumScreen,
   };
};

export default useResponsiveScreen;
