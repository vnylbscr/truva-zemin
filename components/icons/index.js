import React from 'react';

export const MenuIcon = ({ className, fill }) => {
   const iconClassName = className ? className : 'myIcon';
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         className={iconClassName}
         fill='none'
         viewBox='0 0 24 24'
         stroke='currentColor'
         style={{ width: 35, height: 35 }}
      >
         <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
      </svg>
   );
};

export const ArrowLeftIcon = ({ className, fill }) => {
   const iconClassName = className ? className : 'myIcon';
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         className={iconClassName}
         // fill='none'
         viewBox='0 0 24 24'
         stroke='currentColor'
         style={{ width: 25, height: 25 }}
      >
         <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
      </svg>
   );
};

export const ArrowRightIcon = ({ className, fill }) => {
   const iconClassName = className ? className : 'myIcon';
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         className={iconClassName}
         // fill='none'
         viewBox='0 0 24 24'
         stroke='currentColor'
         style={{ width: 25, height: 25 }}
      >
         <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
      </svg>
   );
};
